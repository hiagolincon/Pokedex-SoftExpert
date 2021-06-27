import { Container } from './styles'
import Psyduck from '../../assets/psyduck.png'

export const PageError = () => {
  return (
    <Container>
      <img src={Psyduck} alt="Psyduck" />
      <h1>Página não encontrada!!</h1>
    </Container>
  )
}
