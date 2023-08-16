import React from 'react';

function Pokecard(props) {
  return (
    <div className="Pokecard">
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>Type: {props.type}</p>
    </div>
  );
}

export default Pokecard;
