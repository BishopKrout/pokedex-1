import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  return (
    <div className="Pokedex">
      {props.pokemonList.map(p => (
        <Pokecard key={p.id} {...p} />
      ))}
    </div>
  );
}

Pokedex.defaultProps = {
  pokemonList: [
    { id: 4, name: 'Charmander', type: 'fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    // ... add more default Pokemon objects here
  ],
};

export default Pokedex;
