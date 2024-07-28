import { NavLink } from "react-router-dom"


export const LoginPage = () => {
  return (
    <>
          
      <section className=" text-center text-lg-start">
        
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img src="https://www.cuartomundo.cl/wp-content/uploads/2019/12/Marvel-vs-dc-1-271x400.jpg" alt="Marvel v/s DC"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div className="col-lg-4">
              <div className="card-body py-5 px-md-5">

                <form>
                
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form2Example1" placeholder="ejemplo@inacap.cl" className="form-control" />
                    <label className="form-label fw-semibold" for="form2Example1">Email address</label>
                  </div>

                
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example2" placeholder="Inacap2022" className="form-control" />
                    <label className="form-label fw-semibold" for="form2Example2">Password</label>
                  </div>

                  <NavLink to="/home" type="button" className="btn btn-primary btn-block mb-4"> Sign in</NavLink>                  

                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
