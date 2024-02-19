import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    } 

    const renderError = ( error ) => {
        element.innerHTML = `<h3>${ error }</h3>`;
    }

    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    //! Forma uno
    // findHero( id1 )
    //     .then( renderHero )
    //     // .then( superHero => renderHero( superHero ) );
    //     .catch( renderError);
    //     // .catch( error => renderError( error ) );

    //! Forma dos
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
            
    //     })
    //     .catch( renderError );

    //! Forma tres
    // Se le manda un array de promesas
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( (arrayDePromesas) => {
    // Con esta forma se retorna un array de respuestas y ya se las puede tratar de la forma que se quiera
        console.log(arrayDePromesas);
    })
    .catch( renderError );

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    
    return new Promise(( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );

        if ( hero ){
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found.`);

    });

}