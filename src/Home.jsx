import { Link } from 'react-router-dom';
import image1 from './images/background-image.jpg';
function Home(){

  
return (
<div className="App">
      <div className="background-image">
        <div><img src={image1} alt=""/></div>
        <div className="container">
          <h1 className="title">Book a hostel</h1>
          <p className="slogan">
            The easiest and quickest way to book a hostel thats best for you at Makerere University
          </p>
      <Link to="/hostels">
          <button className="get-started-btn">Explore</button>
          </Link>
          <div className="links">
            <div className="auth-links">
              <Link to="/signup" className="auth-link">Sign Up</Link>
              <div className="vertical-line"></div>
              <Link to="/signin" className="auth-link">Sign In</Link>
           
      
    </div>
    </div>
          </div>
        </div>
      </div>
);
  }
export default Home