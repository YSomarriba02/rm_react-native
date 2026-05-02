export default async function fetchPersonaje({ id }) {
  const fetching = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const personaje = await fetching.json();
  return personaje

}