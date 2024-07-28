import { NavLink } from "react-router-dom"


export const Footer = () => {
  return (
    <nav className="navbar fixed-bottom bg-primary ">
        <div className="container ">
            <NavLink className="navbar-brand text-center fst-normal" to="description" >Descripción de la página</NavLink>
            <NavLink className="navbar-brand text-center fst-normal" to="https://www.google.cl/" target="_blank" >Google</NavLink>
            <NavLink className="navbar-brand text-center fst-normal" to="https://es.wikipedia.org/wiki/Wikipedia:Portada" target="_blank" >Wikipedia</NavLink>
            <NavLink className="navbar-brand text-center fst-normal" to="https://mrxsweb.page/"  target="_blank">La mejor pagina del mundo</NavLink>
        </div>
    </nav>
  )
}
