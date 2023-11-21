import React, { useEffect, useState } from 'react';
import "./signin.css";
import Home from "./Home"
import VendorMaster from './VendorMaster';
import googleIcon from './../assets/google-icon.svg';
import appleIcon from './../assets/apple-icon.svg';
import {auth,provider} from "./config"
import { signInWithPopup } from 'firebase/auth';
import MunicipalCorp from './MunicipalCorp/MunicipalCorporation/MunicipalCorp';
import FileList from './Administrative/FileList';
import ProjectUpdation from './PhysicalProgress/ProjectUpdation';
import ProjectSanction from './PostSanction/ProjectSanction';


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value,setvalue]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
   setvalue(true)
  };

  return (
    <>
    {value?<ProjectSanction/>:
    <div className='container'>
      <div className='blackContainer'>
        <h1>TAMILNADU URBAN FINANCE AND INFRASTRUCTURE DEVELOPMENT CORPORATION LIMITED</h1>
      </div>
      <div className='authContainer'>
        <div className="formContainer">
          <div className='formHead'>
            <h3>Log In</h3>
          </div>
          {/* <div className='signinWith'>
            <div className='signinOptions' onClick={handleSignIn}>
              <h6><img src={googleIcon} alt="Google Icon" />Sign in with Google</h6>
            </div>
            <div className='signinOptions'>
              <h6><img src={appleIcon} alt="Google Icon" />Sign in with Apple</h6>
            </div>
          </div> */}
          <form className="form" onSubmit={handleSubmit}>
            <div className='labelledInput'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='labelledInput'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p style={{ color: "#346BD4" }}>Forgot password?</p>
            <button id='submitBtn' type="submit">Log In</button>
          </form>
          <h6 className='register'>Don’t have an account? <span style={{color:"#346BD4"}}>Register here</span></h6>
        </div>
    
      </div>
      
    </div>
      }
    </>

  )
}


export default SignIn                         