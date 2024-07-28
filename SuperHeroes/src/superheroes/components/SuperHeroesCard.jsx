import { Link } from "react-router-dom";



export const SuperHeroesCard = ({id,name,tipo,origen,description}) => {

    const imgSrc = `/assets/superheroes/${id}.jpg`;

  return (
    <>  
        <div className="container-fluid ">
        
        <div className="card">
        <img src={imgSrc}  alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{origen}</p>
        </div>
        <div className="card-body">
            <Link className="card-link" to={`/heroes/${id}`}>Ver más</Link>
            
        </div>
        </div>
        </div>
        
    
    </>
  )
}
