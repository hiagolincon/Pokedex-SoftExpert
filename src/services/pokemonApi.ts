import { api } from './api'
import { Pokemon } from './types'
import { Result } from './types/pokemon-api-result'
import { getPokemonData, getPokemonIdByUrl } from './utils'

export const getAllPokemons = async (offset = '0', limit = '20') => {
  const apiResponse = await api.get('/pokemon', {
    params: {
      offset,
      limit,
    },
  })
  const { results } = apiResponse.data

  const pokemons = results.map(async (pokemon: Result) => {
    const pokemonId = getPokemonIdByUrl(pokemon.url)

    const pokemonData = await getPokemonData(pokemonId)

    return pokemonData
  })

  const resovleRequest = await Promise.all<Pokemon>(pokemons)
  return resovleRequest
}

export const getPokemonById = async (pokemonId: string) => {
  const pokemonData = await getPokemonData(pokemonId)
  return pokemonData
}
