import { getSuperHeroesByEditorial } from "../helpers/getSuperHeroesByEditorial";
import { SuperHeroesCard } from "./SuperHeroesCard";


export const SuperHeroesList = ({ tipo }) => {
    const superHeroes = getSuperHeroesByEditorial(tipo);

    return (
        <>
            <div className="container">
                <div className="row">
                    {superHeroes.map((aux) => (
                        <div key={aux.id} className="col-md-4">
                            <SuperHeroesCard {...aux} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};