import { NavLink } from "react-router-dom"


export const Navbar = () => {

  const imgSrc = "/assets/icon/favicon-32x32.png";
    
  return (

    <>

    
    <nav className="navbar navbar-expand-lg bg-primary mb-4 ">
        <div className="container">
            <img src={imgSrc} alt="SuperHero"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
                <NavLink className="nav-link active fs-4" to="home">home</NavLink>
                <NavLink className="nav-link fs-4" to="dc">DC</NavLink>
                <NavLink className="nav-link fs-4" to="marvel">Marvel</NavLink>
                <NavLink className="nav-link fs-4" to="login">Log Out</NavLink>
                
            </div>
            </div>
        </div>
    </nav>
    
    </>
  )
}
