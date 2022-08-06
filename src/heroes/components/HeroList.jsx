import React, {  useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroeCard } from './HeroeCard';


export const HeroList = ({ value }) => {

    const heroes = useMemo( () => getHeroesByPublisher(value), [value] ) ;

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
