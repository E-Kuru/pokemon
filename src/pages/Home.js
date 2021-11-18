import { useState, useEffect } from 'react'

import { Box, Text, UnorderedList, ListItem, Button } from "@chakra-ui/react"

import {LogContext} from '../contexts/IsLog'
import { useContext } from "react"

const Home = () => {

  const {isLogged, setIsLogged} = useContext(LogContext)

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    getPokemon(1)
  }, [])

  const getPokemon = id => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(res => setPokemon(res))
  }

  const handleButtonClick = () => {
    const randomId = Math.floor(Math.random() * 151 + 1)
    getPokemon(randomId)
  }

  if (!pokemon) {
    return <p>Pas de pokemon</p>
  }

  console.log(pokemon)

  return (
    <>
      {isLogged ? 
      <Box>
        <h1 style={{textAlign : 'center',fontSize : '20px',marginBottom : '4%'}}>Hvae fun, u're Logged</h1>
      <Box border="1px" borderColor="teal" borderRadius={5} p={5} >
       <Box mb={5}>
         <img src={pokemon.sprites.other["official-artwork"].front_default} style={{height : '250px'}} alt={pokemon.name} />
       </Box>
       <Text as="h1" fontSize="30px" casing="capitalize">{pokemon.name}</Text>
       <Text><b>Height:</b> {pokemon.height}</Text>
       <Text><b>Weight:</b> {pokemon.weight}</Text>
       <Text><b>Types:</b></Text>
       <UnorderedList>
         {pokemon.types.map(type => (
           <ListItem key={type.type.name}>{type.type.name}</ListItem>
         ))}
       </UnorderedList>
     </Box>
     
     <Button colorScheme="teal" variant="solid" w="100%" mt={5} onClick={handleButtonClick}>
       Get random pokemon
     </Button>
   </Box>
   :
   <h1>Get Logged please</h1>
   }
    </>

  )
}

export default Home
