import React from 'react';
import { getHeroesByPublisher } from '../helpers';


export const HeroList = ({ value }) => {

    console.log( value );
    const heroes = getHeroesByPublisher(value);
    console.log(heroes);


    return (
       
            <ul>
                {
                    heroes.map(hero => (
                        <li key={hero.id}>
                        {hero.superhero}</li>
                    ))
                }
            </ul>
       
    )
}
