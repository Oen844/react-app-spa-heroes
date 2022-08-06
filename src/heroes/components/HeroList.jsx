import React from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroeCard } from './HeroeCard';


export const HeroList = ({ value }) => {

    const heroes = getHeroesByPublisher(value);

    return (

        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(hero => (
                    <HeroeCard
                        key={hero.id}
                        {...hero}

                    />
                ))
            }
        </div>

    )
}
