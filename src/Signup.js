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
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [aadharnumber, setAadharnumber] = useState("")
  const [date, setDate] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [formErrors, setFormErrors] = useState([])
  console.log(customerid,'cuid',email,'em',password,'pa',conformpassword,'cpas',otp,'otp')

  

  const toggleSlider = () => {
    setIsSignIn(!isSignIn);
  };
  const handleOtp = () => {
    setRecovery("OTP");
    localStorage.setItem("Email",email)
  }

  function runValidation(){
    const errors = {}
    if (customerid.trim().length === 0){
      errors.customerid = 'customer id is required'
    }
    if (password.trim().length === 0){
      errors.password = 'password is required'
    }
    setFormErrors(errors)
    return errors

  }

  function Validations(){
    const errors = {}
    if (firstname.trim().length === 0){
      errors.firstname = 'Firstname is required'
    }
    if (password.trim().length === 0){
      errors.password = 'Password is required'
    }
    if (lastname.trim().length === 0){
      errors.lastname = 'Lastname is required'
    }
    if (email.trim().length === 0) {
      errors.email = 'Email is required';
    } else {
      // Regular expression to validate email format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        errors.email = 'Email is not in a valid format';
      }
    }
    if (phonenumber.trim().length === 0){
      errors.phonenumber = 'Phonenumber is required'
    }
    if (!date) {
      errors.date = 'Date of Birth is required';
    } else {
      const currentDate = new Date();
      const inputDate = new Date(date);
      if (inputDate >= currentDate) {
        errors.date = 'Date of Birth cannot be in the future';
      }
    }
    if (!gender) {
      errors.gender = 'Gender is required';
    }
    if (aadharnumber.trim().length === 0){
      errors.aadharnumber = 'Aadharnumber is required'
    }
    if (address.trim().length === 0){
      errors.address = 'Address is required'
    }
    if (city.trim().length === 0){
      errors.city = 'City is required'
    }
    if (state.trim().length === 0){
      errors.state = 'State is required'
    }
   

    setFormErrors(errors)
    return errors

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    const formData = {customerid,password,}
    const errors = runValidation(); // Get validation errors

    if (Object.keys(errors).length === 0) {
      // Proceed with form submission logic
      console.log('Form submitted', formData);
      navigate('/home')
    } else {
      console.log('Validation errors:', errors);
    }

  }

  const handleSignup=(e)=>{
    e.preventDefault()
    const formData={firstname,password,lastname,email,date,gender,phonenumber,aadharnumber,city,address,state,}
    const errors=Validations();
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission logic
      console.log('Form submitted', formData);
      setIsSignIn(true); 
    } else {
      console.log('Validation errors:', errors);
    }
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
        overflowY: 'auto'
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
          <form >
          <h1>Sign In</h1>
          <input type="text" placeholder="Enter CustomerID" 
          value={customerid}
          onChange={(e)=>{setCustomerid(e.target.value)}} />
          {formErrors.customerid && <span style={{color:"red"}}>{formErrors.customerid}</span>}
          <input type="password" placeholder="Enter Password" value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
          {formErrors.password && <span style={{color:"red"}}>{formErrors.password}</span>}
          <div className="forgot-password">
            {/* <a href="/forgot-password">Forgot Password?</a> */}
            <Link onClick={()=>{setRecovery("email")}}>Forgot Password?</Link>
          </div><br/>
          <button type="submit" onClick={handleSubmit}>Sign In</button>
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
        


        <div className="form-container sign-up-container scrollable-form">
  <form>
    {/* First Name */}
    <div className="input-group">
      <input
        type="text"
        placeholder="FirstName"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      {formErrors.firstname && <span style={{color:"red"}}> {formErrors.firstname}</span>}
    </div>

    {/* Last Name */}
    <div className="input-group">
      <input
        type="text"
        placeholder="LastName"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      {formErrors.lastname && <span style={{color:"red"}} className="error-message">{formErrors.lastname}</span>}
    </div>

    {/* Password */}
    <div className="input-group">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {formErrors.password && <span style={{color:"red"}} className="error-message">{formErrors.password}</span>}
    </div>

    {/* Email */}
    <div className="input-group">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {formErrors.email && <span style={{color:"red"}} className="error-message">{formErrors.email}</span>}
    </div>

    {/* Phone Number */}
    <div className="input-group">
      <input
        type="number"
        placeholder="Phonenumber"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />
      {formErrors.phonenumber && <span style={{color:"red"}} className="error-message">{formErrors.phonenumber}</span>}
    </div>

    {/* Aadhaar Number */}
    <div className="input-group">
      <input
        type="text"
        placeholder="Aadharnumber"
        value={aadharnumber}
        onChange={(e) => setAadharnumber(e.target.value)}
      />
      {formErrors.aadharnumber && <span style={{color:"red"}} className="error-message">{formErrors.aadharnumber}</span>}
    </div>

    {/* Date of Birth */}
    <div className="input-group">
      <input
        type="date"
        placeholder="DOB"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {formErrors.date && <span style={{color:"red"}} className="error-message">{formErrors.date}</span>}
    </div>

    {/* Gender */}
    <div className="radio-group">
      <label>Gender:</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>
      {formErrors.gender && <span style={{color:"red"}} className="error-message">{formErrors.gender}</span>}
    </div>

    {/* Address */}
    <div className="input-group">
      <input
        type="textarea"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {formErrors.address && <span style={{color:"red"}} className="error-message">{formErrors.address}</span>}
    </div>

    {/* City */}
    <div className="input-group">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {formErrors.city && <span style={{color:"red"}} className="error-message">{formErrors.city}</span>}
    </div>

    {/* State */}
    <div className="input-group">
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      {formErrors.state && <span style={{color:"red"}} className="error-message">{formErrors.state}</span>}
    </div>

    {/* Account Type */}
    <div className="account-type">
      <label htmlFor="accountType">Account Type:</label>
      <select id="accountType">
        <option value="savings">Savings</option>
        <option value="current">Current</option>
        <option value="fixedDeposit">Fixed Deposit</option>
        <option value="recurring">Recurring Account</option>
      </select>
    </div>

    <button type="submit" onClick={handleSignup}>
      Sign Up
    </button>
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
