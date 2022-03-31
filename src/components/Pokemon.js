import { useEffect, useState } from "react"
import getPokemon from "../services/getPokemon"

const Pokemon = ({name, url}) => {
    
    const [pokeImage,  setPokeImage] = useState('')

    // useEffect(() =>{


    //     getPokemon(url)
    //     .then(response =>{
    //         setPokeImage(response.data.sprites.front_default)
    //     })
    //     .cath(err =>{
    //         console.log(err)
    //     })
    // }, [url])
    
    
    
    
    return (
        <div>
                
                <h1>{name}</h1>

        </div>
    )
}

export default Pokemon