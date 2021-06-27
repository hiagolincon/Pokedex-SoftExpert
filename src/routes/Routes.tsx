import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Pokemon = lazy(() =>
  import('src/pages/Pokemon').then(module => ({
    default: module.Pokemon,
  })),
)

const ListPokemons = lazy(() =>
  import('src/pages/ListPokemons').then(module => ({
    default: module.ListPokemons,
  })),
)

const PageError = lazy(() =>
  import('src/pages/PageError').then(module => ({
    default: module.PageError,
  })),
)

export const Routes = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={ListPokemons} />
        <Route path="/pokemon/:pokemonId" component={Pokemon} />
        <Route path="/404" component={PageError} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  )
}
