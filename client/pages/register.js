import { useState } from "react";
import Layout from "../components/layout";
import axios from "axios";
import { showSuccessMessage, showErrorMessage } from "../helpers/alerts";
import { API } from "../config"

const registerPage = () => {
    const [state, setState] = useState({
      name: '',
      email: '',
      username: '',
      password: '',
      error: '',
      success: '',
      buttonText: 'Register'
    })

    const { name, email, username, password, error, success, buttonText } = state;

    const handleChange = (name) => (e) => {
        setState({...state, [name]: e.target.value, error: '', success: '', buttonText: 'Register'})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setState({ ...state, buttonText: 'Registering'})
      try{
        const response = await axios.post(`${API}/register`, {
          name, email, username, password
        })
        console.log(response)
          setState({
            ...state,
            name: '',
            email: '',
            username: '',
            password: '',
            buttonText: 'Submitted',
            success: response.data.message
          });
      } catch {
        console.log(error)
        setState({
          ...state,
          buttonText: 'Register',
          error: error.response.data.error
        })
      }
    }

/*    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, buttonText: 'Registering'})
        //console.table({name, email, username, password});
        axios.post(`http://localhost:8000/api/register`, {
          name, email, username, password
        })
        .then(response => {
          console.log(response)
          setState({
            ...state,
            name: '',
            email: '',
            username: '',
            password: '',
            buttonText: 'Submitted',
            success: response.data.message
          });
        })
        .catch(error => {
          console.log(error)
          setState({
            ...state,
            buttonText: 'Register',
            error: error.response.data.error
          })
        })
    }; 

*/

    const registerForm = () => (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Your name"></input>
        </div>
        <br/>
        <div className="form-group">
          <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Your email"></input>
        </div>
        <br/>
        <div className="form-group">
          <input value={username} onChange={handleChange('username')} type="text" className="form-control" placeholder="Username"></input>
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
        <h1>Register</h1>
        <br/>
        { success && showSuccessMessage(success)}
        { error && showErrorMessage(error)}
        {registerForm()}
        <br/>
        
      </div>
    </Layout>
  }
  
  export default registerPage