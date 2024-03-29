import React from "react";
import './Singup.css'
import MUlogo from '../../images/MUlogo.jpg'
const Auth = () => {
    return(
     
        <div className="Auth">
      <div className="a-left">
        <img src={MUlogo} alt="" />
        <div className="Webname">
          <h1>MU Archive</h1>
          <h6>Hello MU'ians Welcome to our Archive website</h6>
        </div>
      </div>
     {/* <SignUp/> */}
      <LogIn/>
        </div>
    )
}

function SignUp() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>
  
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>
  
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
            />
          </div>
  
          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            <input
              type="text"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>
  
          <div>
              <span style={{fontSize: '12px'}} >Already have an account. Login!</span>
          </div>
          <button className="button infoButton" type="submit">Signup</button>
        </form>
      </div>
    );
  }
  
  function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

export default Auth;