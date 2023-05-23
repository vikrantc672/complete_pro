import React from 'react'
import "./Login.css";
import { loginUrl } from './spotify';
function Login() {
  return (
    <div className='login'>
       <img src="logo.jpg" alt="hi"  width="300" height="500"/>
    <a href={loginUrl}>LOGIN TO LET'S ROCK</a>
    </div>
  )
}

export default Login
