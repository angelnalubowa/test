import { useState } from "react";
import { Link } from 'react-router-dom';
import image6 from './images/logo2.png';
function CreateAccount() {
  const [userType, setUserType] = useState('Dean');


  return (
    <div className="create-account-container">
    <div className="create-account-card">
    <div className="login-card2">
      <div className ="card-image">
    <img src={image6} alt=""/>
            </div>
    <div className="create-account-page">
    <h1>Create an Account</h1>
    <div className="slide-button">
        <button1
        className={`slide-button-option ${userType === 'Dean' ? 'selected' : ''}`}
        onClick={() => setUserType('Dean')}
        >
          Dean
        </button1>
        <Link to="/CreateAccount2">
        <button1
        className={`slide-button-option ${userType === 'Custodian' ? 'selected' : ''}`}
        onClick={() => setUserType('Custodian')}
        >
        Custodian
        </button1>
        </Link>
        <div className={`slider ${userType === 'Custodian' ? 'right' : ''}`}></div>
      </div>

      <div className="input-fields">
        <p1>Full Name</p1>
        <input type="" placeholder= "Enter name & surname" />
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


export default CreateAccount;
