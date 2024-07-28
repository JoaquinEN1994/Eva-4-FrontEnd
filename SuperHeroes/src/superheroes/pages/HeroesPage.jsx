import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";



export const HeroesPage = () => {
  const {id} = useParams();
  const hero = getHeroById(id);
  const url = useNavigate();
  console.log("",hero);

  const returnPage = () => {
    if(hero.tipo === "DC"){
      url("/dc");
  }else{
    url("/marvel");
  }}
  return (
    <>
    {
      hero ? (
        <div className="container mb-5">
        <div className="row">
          <div className="col-8 offset-2">
            <div class="card">
              <img src={`/assets/superheroes/${hero.id}.jpg`} class="card-img-top img-fluid" alt="Imagen del Super Heroe"/>
              <div class="card-body">
                <h5 class="card-title">Nombre: {hero.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Ciudad de origen: {hero.origen}</h6>
                <h6 class="card-subtitle mb-2 text-body">Editorial: {hero.tipo}</h6>
                <p class="card-text">Inicios del personaje: {hero.description}</p>
                <button className="btn btn-primary" onClick={returnPage}>Regresar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ): (
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El heroes buscado no existe",
          footer: '<a href="/dc">Devolver a DC</a> | <a href="/marvel">Devolver a Marvel</a>'
        })
        
      )
    }

    </>
  )
}
