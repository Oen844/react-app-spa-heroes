import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { AuthProvider } from '../context/AuthProvider';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  
  

  const navigate = useNavigate();

  const onLogin = () => {

    login('Pau Egea');

    navigate('/', {
      replace: true
    });

  }

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
