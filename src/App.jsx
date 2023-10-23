import './App.css';
import image1 from './images/background-image.jpg';
function App() {
  return (
    <div className="App">
      <div className="background-image">
        <div><img src={image1} alt=""/></div>
        <div className="container">
          <h1 className="title">Book a hostel</h1>
          <p className="slogan">
            The easiest and quickest way to book a hostel thats best for you at Makerere University
          </p>
          <button className="get-started-btn">Get Started</button>
          <div className="links">
    <div className="auth-links">
      <a href="/signup" className="auth-link">Sign Up</a>
      <div className="vertical-line"></div>
      <a href="/signin" className="auth-link">Sign In</a>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

