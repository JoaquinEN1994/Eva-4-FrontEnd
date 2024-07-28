import { superHeroes } from "../data/heroes";


export const getSuperHeroesByEditorial = (tipo) => {
  
    const aux = ['DC', 'Marvel'];
    if (!aux.includes(tipo)) {
        throw new Error(`Editorial: "${tipo}" no es correcto`);
    }
    return superHeroes.filter(heroe => heroe.tipo === tipo);

}
