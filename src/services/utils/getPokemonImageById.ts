const getPokemonImage = (
  id: string,
): { front: string; back: string; profile: string } => {
  return {
    profile: `https://raw.githubusercontent.com/PokeAPI/sprites/d41c408f7e5be9848260f470e34069c264091a69/sprites/pokemon/other/dream-world/${id}.svg`,
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${id}.gif`,
  }
}
export default getPokemonImage
