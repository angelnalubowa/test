


function CreateAccount() {
  const [userType, setUserType] = (null);

  const handleUserType = (type) => {
    setUserType(type);
  };

  return (
    <div className="create-account-page">
      <div className="user-type-buttons">
        <button
          onClick={() => handleUserType('Dean')}
          className={`user-type-button ${userType === 'Dean' ? 'selected' : ''}`}
        >
          Dean
        </button>
        <button
          onClick={() => handleUserType('Custodian')}
          className={`user-type-button ${userType === 'Custodian' ? 'selected' : ''}`}
        >
          Custodian
        </button>
      </div>

      <div className="input-fields">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>

      <button className="create-account-button">Create Account</button>

      <div className="already-have-account">
        Already have an account? <a href="/login">Log In</a>
      </div>

      <div className="divider">
        <hr />
        <span>or</span>
        <hr />
      </div>

      <div className="api-options">
        <button className="google-api-button">Sign Up with Google</button>
        <button className="facebook-api-button">Sign Up with Facebook</button>
      </div>
    </div>
  );
}

export default CreateAccount;
