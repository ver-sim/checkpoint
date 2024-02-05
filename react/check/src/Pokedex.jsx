import { useEffect, useState } from "react"

export const Pokedex = () => {
  const [inputPoke, setInputPoke] = useState('');
  const [pokemon, setPokemon] = useState();
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(false);
  const [morePoke, setMorePoke] = useState(null)

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                if (resp.ok) {
                    const json = await resp.json();
                    setPokemonData(json);
                } else {
                    setError('problem')
                }
            } catch (error) {
                setError(error.message);
            }
        }
        getPokemon();
    }, [pokemon]);

    useEffect(() => {
        const more = async () => {
            try {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
                if (resp.ok) {
                    const json = await resp.json();
                    setMorePoke(json);
                } else {
                    setError('problem')
                }
            } catch (error) {
                setError(error.message);
            }
        }
        more();

        }, [pokemon])
    console.log(morePoke);

const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(inputPoke);

}

const handlInfo = () => {
    setInfo(p => !p);
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="poke">
                <input type="text" id="poke" name="poke" value={inputPoke} onChange={(e) => setInputPoke(e.target.value)} />
            </label>
            <button type="submit">Search</button>
        </form>
        <section>
            {!pokemonData && !error && <h2>Loading...</h2>}
            {error && <p>{error}</p>}
            {pokemonData && <div>
                <img src={pokemonData.sprites.front_default} alt="" />
                <p>{pokemonData.name}</p>
                <p>{pokemonData.base_experience}</p>
                <p>{pokemonData.abilities.map((val, i) => (
                    <span key={i}> {val.ability.name}</span>
                ))}</p>
                <button onClick={handlInfo}>more</button>
                {info && <div>
                    <p>{morePoke.egg_groups.map((val, i) => (
                        <span key={i}> {val.name}</span>
                    ))}</p>
                    <p>{morePoke.color.name}</p>
                    <p>{morePoke.shape.name}</p>
                </div>
                    
                    }
                </div>}
        </section>
    </div>
  )
}
