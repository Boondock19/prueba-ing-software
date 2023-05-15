import './login.css'

export const Login = () => {
  return (
    <>  
      <div className="p-5 login-form">
          <form className='row'>
            <h1>Login</h1>
            <div className="mb-3 col-sm-12">
              {/* falta saber si sera por email o username */}
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className='d-flex'>
              <button type="submit" className="btn btn-primary">Submit</button>
              {/* <a>No posee una cuenta ? registrese aqui</a> */}
            </div>
        </form>
      </div>
    </>
  )
}
