import React from 'react';
import { getHeroesByPublisher } from '../helpers';


export const HeroList = ({ value }) => {

    const heroes = getHeroesByPublisher(value);

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
