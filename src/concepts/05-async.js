import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

  const id1 = '5d86371fd55e2e2a30fe1cc4';

  console.log('Principio');

  findHero(id1)
    // .then( hero => element.innerHTML = hero.name )
    .then( console.log )
    .catch( error => element.innerHTML = error );
}

/**
 * Al aplicar async el retorno de la función se transforma en una promesa
 * @param {String} id 
 * @returns {Promise{Object}}
 */
const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero )
        throw `Hero with id ${ id } not found`;

    return hero;

}