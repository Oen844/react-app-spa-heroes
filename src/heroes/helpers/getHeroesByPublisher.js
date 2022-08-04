import {heroes} from '../data/heroes';

export const getHeroesByPublisher = ( publisherValue ) => {
    
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes( publisherValue )) {
        throw new Error( `${ publisherValue} is not a valid publisher`);
    }
    


     return heroes.filter( hero => hero.publisher === publisherValue );
}