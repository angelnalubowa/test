import image5 from './images/logo.png';
function Login() {
  return (
    <div>
      <div className="Login-card">
      <div className="Login-container">
      <div className="login-card2">
      <div className ="card-image">
    <img src={image5} alt=""/>
            </div>
    <div className="login-page">
    
    <h1>Log In</h1>
        <p2>Please enter your details here</p2>
      <div className="input-fields">
        <input type="email" placeholder="Enter you email" />
        <input type="password" placeholder="Enetr your password" />
      </div>

      <div className="checkboxes">
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <label>
          <input type="checkbox" /> Forgot Password
        </label>
      </div>

      <button className="login-button">Login</button>
      <div className="already-have-account">
        Do not have an account? <a href="/Signup">Sign Up</a>
      </div>
      <div className="divider">
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <div className="api-options">
        <button className="google-api-button"> Signup with Google</button>
        <button className="facebook-api-button">Signup with Facebook</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Login;
