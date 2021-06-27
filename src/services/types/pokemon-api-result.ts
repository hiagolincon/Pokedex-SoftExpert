export type Result = {
  name: string
  url: string
  description?: string
}

export type PokemonApiResult = {
  count: number
  next?: string
  previous?: string
  results: Result[]
}

export default PokemonApiResult
