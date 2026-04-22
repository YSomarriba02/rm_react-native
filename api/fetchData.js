export default async function  fetchPersonajes() {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    if(!data.ok){
        return []
    }
    const personajes = await data.json()
    return personajes.results
}