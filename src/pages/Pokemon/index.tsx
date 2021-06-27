import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import { getPokemonById } from 'src/services/pokemonApi'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import {
  Container,
  Profile,
  DetailsPokemon,
  Skills,
  Details,
  HeightAndWeight,
  Stats,
  Bar,
} from './styles'

export const Pokemon = () => {
  const { pokemonId } = useParams<{ pokemonId: string }>()
  const { data } = useQuery('Poke', async () => {
    const pokemon = await getPokemonById(pokemonId)
    return pokemon
  })

  return (
    <Container>
      <Profile>
        <Link to="/">
          <FaLongArrowAltLeft />
        </Link>
        <img src={data?.image.profile} alt={data?.name} />
        <h2>{data?.name}</h2>
      </Profile>
      <DetailsPokemon>
        <HeightAndWeight>
          <div>
            <strong>Altura</strong>
            <p>{data?.height}Cm</p>
          </div>
          <div>
            <strong>Peso</strong>
            <p>{data?.weight}Kg</p>
          </div>
        </HeightAndWeight>
        <Details>
          <Skills>
            <div>
              <strong>Tipos</strong>
              {data?.types.map(abiliity => (
                <p>{abiliity.name}</p>
              ))}
            </div>
          </Skills>

          <Skills>
            <div>
              <strong>Habilidades</strong>
              {data?.abilites.map(abiliity => (
                <p>{abiliity.name}</p>
              ))}
            </div>
          </Skills>
        </Details>
        <Stats>
          {data?.stats.map(stat => (
            <div className="box-stats">
              <h3>{stat.name}</h3>
              <div className="stat">
                <Bar stat={stat.base_stat} />
                <p>{stat.base_stat}%</p>
              </div>
            </div>
          ))}
        </Stats>
      </DetailsPokemon>
    </Container>
  )
}
