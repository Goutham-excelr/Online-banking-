import React, { useState } from "react";
import './app.css'; // Ensure this path is correct
// import img from "../Images/telephone3.png";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate()
  const [isSignIn, setIsSignIn] = useState(true); 
  const [customerid,setCustomerid] = useState("")
  const [recovery, setRecovery] = useState("signin")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [otp,setOtp] = useState("") 
  const [conformpassword,setConformpassword] = useState("")
  console.log(customerid,'cuid',email,'em',password,'pa',conformpassword,'cpas',otp,'otp')

  console.log(recovery,'re')

  const toggleSlider = () => {
    setIsSignIn(!isSignIn);
  };
  const handleOtp = () => {
    setRecovery("OTP");
    localStorage.setItem("Email",email)
  }

  return (
    <Grid 
      container
      sx={{ 
        backgroundImage:`url('https://bizclik-cms-prod.s3.eu-west-2.amazonaws.com/images/fvyzcg2pgkawqam97-thrash/GettyImages-1023248390%20(1).jpeg')`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        backgroundRepeat: 'no-repeat',  
        height: '100vh',
      }}
    >
      <Grid 
        item xs={12}
        pt={10}
        container
        justifyContent="center"
        alignItems="center"
        className={`container ${isSignIn ? "" : "right-panel-active"}`}
      >
        <div className="form-container sign-in-container">
        {recovery=="signin"&&
        (
          <form>
          <h1>Sign In</h1>
          <input type="text" placeholder="Enter CustomerID" 
          value={customerid}
          onChange={(e)=>{setCustomerid(e.target.value)}} />
          
          <input type="password" placeholder="Enter Password" value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
          <div className="forgot-password">
            {/* <a href="/forgot-password">Forgot Password?</a> */}
            <Link onClick={()=>{setRecovery("email")}}>Forgot Password?</Link>
          </div><br/>
          <button type="submit" onClick={()=>(navigate('/home'))}>Sign In</button>
        </form>
        )
        }
        {recovery=="email"&&
        (
          <>
          <h2>Recovery Password</h2>
          <input type="email" placeholder="Enter Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          />
          <button onClick={handleOtp}>Send OTP</button>
          </>
        )
        }
        {recovery=="OTP"&&
        (
          <>
          <h2>Recovery Password</h2>
          <input type="Number" placeholder="Enter Otp" value={otp}
          onChange={(e)=>{setOtp(e.target.value)}} />
          {/* <link>Resend OTP</link> */}
          <Link>Resend OTP</Link>
          <button onClick={()=>{setRecovery("password")}}>submit</button>
          </>
        )
        }
        {recovery=="password"&&
        (
          <>
          <h1>Set New Password</h1>
          <input type="password" placeholder="Enter password"  value={password}
          onChange={(e)=>{setPassword(e.target.value)}}></input>
          <input type="password" placeholder="Conform password" value={conformpassword}
          onChange={(e)=>{setConformpassword(e.target.value)}}></input>
          <button onClick={()=>{setRecovery("signin")}}>submit</button>
          
          
          </>
        )
        }
        </div>

        <div className="form-container sign-up-container">
          <form>
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="LastName" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phonenumber" />
            <input type="text" placeholder="Aadharnumber" />
            <input type="date" placeholder="DOB" />
            <div className="radio-group">
            <label>Gender :</label>
              <label>
                <input type="radio" name="gender" value="male" />Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
            <input type="textarea" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <div className="account-type">
              <label htmlFor="accountType">Account Type:</label>
              <select id="accountType">
                <option value="savings">Savings</option>
                <option value="current">Current</option>
                <option value="fixedDeposit">Fixed Deposit</option>
                <option value="recurring">Recurring Account</option>
              </select>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>If you already have an account, please sign in here.</p>
              <button className="ghost" onClick={toggleSlider}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us.</p>
              <button className="ghost" onClick={toggleSlider}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
