import { useEffect, useState } from "react"

export const Pokemon = ({name}) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (condition) {
                    
                } else {
                    
                }
            } catch (error) {
                setError(error.message);
            }
        }
        getPokemon();
    }, [name])
  return (
    <li>

    </li>
  )
}
