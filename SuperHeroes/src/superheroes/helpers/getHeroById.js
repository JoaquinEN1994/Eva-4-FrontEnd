import { superHeroes } from "../data/heroes";

export const getHeroById = (id) => {

    return superHeroes.find(hero => hero.id === id);
}