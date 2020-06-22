import React, { Component } from "react";

import "./Pokecard.css";
//const POKE_API = 'https://pokeres.bastionbot.org/images/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThre = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { name, type, exp , id } = this.props;
    let imgSrc = `${POKE_API}${padToThre(id)}.png`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-img">
            <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
