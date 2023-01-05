import { useState } from "react";
import Layout from "../components/layout";

const loginPage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Login'
  })

  const { email, password, error, success, buttonText } = state;

  const handleChange = (name) => (e) => {
      setState({...state, [name]: e.target.value, error: '', success: '', buttonText: 'Login'})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.table({email, password});
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Your email"></input>
      </div>
      <br/>
      <div className="form-group">
        <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type a password"></input>
      </div>
      <br/>
      <div className="form-group">
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>

    </form>
  )

  return <Layout>
    <div className="col-md-6 offset-md-3">
      <h1>Login</h1>
      <br/>
      {loginForm()}
      <br/>
 
    </div>
  </Layout>
  }
  
  export default loginPage