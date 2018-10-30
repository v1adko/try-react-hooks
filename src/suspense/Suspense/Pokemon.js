import React, {useState, Suspense} from 'react'
import {createCache, createResource} from 'react-cache'
import fetchPokemon from './fetch-pokemon'

const cache = createCache()
const myPokemon = createResource(fetchPokemon)

function PokemonInfo({pokemonName}) {
  const pokemon = myPokemon.read(cache, pokemonName)
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function App() {
  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
        <br />
        <input id="pokemonName-input" name="pokemonName" />
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? (
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

const buttonStyle = {
	padding: '0 5px',
    margin: 0,
    fontSize: '1em',
    width: 'auto'
}

export default App