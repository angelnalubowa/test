import { useState } from "react";
import { Link } from 'react-router-dom';
import image5 from './images/logo.png';
function CreateAccount2() {
  const [userType, setUserType] = useState('Custodian');
    return (
          <div className="create-account-card">
      <div className="create-account-container">
      <div className="login-card2">
      <div className ="card-image">
    <img src={image5} alt=""/>
            </div>
      <div className="create-account-page">
      <h1>Create an Account</h1>
      <div className="slide-button">
      <Link to="/Signup">
          <button1
          className={`slide-button-option ${userType === 'Dean' ? 'selected' : ''}`}
          onClick={() => setUserType('Dean')}
          >
            Dean
          </button1>
          </Link>
          <button1
          className={`slide-button-option ${userType === 'Custodian' ? 'selected' : ''}`}
          onClick={() => setUserType('Custodian')}
          >
          Custodian
          </button1>
          
          <div className={`slider ${userType === 'Custodian' ? 'right' : ''}`}></div>
        </div>
  
        <div className="input-fields">
          <p1>Full Name</p1>
          <input type="" placeholder= "Enter name & surname" />
          <p1>Hostel Name</p1>
          <input type="" placeholder= "Enter hostel name" />
          <p1>Email Adress</p1>
          <input type="email" placeholder=" Enter your email" />
          <p1>Password</p1>
          <input type="password" placeholder="Enter your password" />
        </div>
  
        <button className="create-account-button">Create Account</button>
  
        <div className="already-have-account">
          Already have an account? <a href="/login">Log In</a>
        </div>
  
        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
  
        <div className="api-options">
          <button className="google-api-button">Sign Up with Google</button>
          <button className="facebook-api-button">Sign Up with Facebook</button>
        </div>
      </div>
      </div>
    </div>
    </div>
    );
  }
  
  
  export default CreateAccount2;