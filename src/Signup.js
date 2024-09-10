import React, { useState } from "react";
import './app.css'; // Ensure this path is correct
// import img from "../Images/telephone3.png";
import { Grid } from "@mui/material";

const Register = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSlider = () => {
    setIsSignIn(!isSignIn);
  };

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
          <form>
            <h1>Sign In</h1>
            <input type="text" placeholder="CustomerID" />
            <input type="password" placeholder="Password" />
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div><br/>
            <button type="submit">Sign In</button>
          </form>
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
