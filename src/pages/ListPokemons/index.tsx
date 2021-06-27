import { useRef, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { FcSearch } from 'react-icons/fc'

import { getAllPokemons } from 'src/services/pokemonApi'
import useDebounce from 'src/utils/useDebounce'
import { Pokemon } from 'src/services/types'
import { capitalizeFirstLetter } from 'src/services/utils'
import { Container, SearchList, PokemonList, BoxPokemon } from './styles'
import useIntersectionObserver from './hooks'

export const ListPokemons = () => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([])
  const [pokemonSearch, setPokemonsSearch] = useState('')

  const pokemonValue = useDebounce<string>(
    capitalizeFirstLetter(pokemonSearch),
    500,
  )
  const search = pokemonSearch.length >= 2

  const { isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['repoData', pokemonValue],
      async ({ pageParam }) => {
        const response = await getAllPokemons(pageParam, search ? '200' : '20')
        return response
      },
      {
        onSuccess: (response: { pages: Pokemon[] }) => {
          const flatPages: Pokemon[] = response.pages.flat()

          const result = flatPages.filter(({ name }) =>
            name.includes(pokemonValue),
          )

          setPokemonsList(result)
        },
        getPreviousPageParam: firstPage => firstPage[0].id,

        getNextPageParam: lastPage => {
          const a = lastPage.length - 1
          return lastPage[a].id
        },
      },
    )

  const loadMoreButtonRef = useRef<HTMLButtonElement>(null)

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <Container>
      <h1>Pokédex</h1>

      <SearchList>
        <FcSearch size={30} />
        <input
          type="text"
          value={pokemonSearch}
          placeholder="Busque pokemons"
          onChange={e => setPokemonsSearch(e.target.value)}
        />
      </SearchList>

      <PokemonList>
        {!isLoading ? (
          pokemonsList.map(pokemon => (
            <BoxPokemon
              front={pokemon.image.front}
              back={pokemon.image.back}
              to={`/pokemon/${pokemon.id}`}
            >
              <div />
              <strong>{pokemon.name}</strong>
            </BoxPokemon>
          ))
        ) : (
          <div className="loading" />
        )}
      </PokemonList>

      <button
        type="button"
        ref={loadMoreButtonRef}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        data-testid="button-load"
      >
        {isFetchingNextPage && !isLoading && <div className="loading-more" />}
      </button>
    </Container>
  )
}
