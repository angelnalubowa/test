

import { Link, useParams } from 'react-router-dom';
import { FaBed, FaWifi, FaBath, FaTv, FaParking, FaTh } from 'react-icons/fa'; 
import {BsHeart } from 'react-icons/Bs';
import { Carousel } from 'react-responsive-carousel';
import { Button} from 'react-bootstrap';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { hostels } from './ExplorePage';
import BookingDetails from './BookingDetails';




const HostelDetails = () => {
 
   const addToFavorites = () => {
   }; 

  const params = useParams();
  const hostelId = params.id

  const hostel= hostels.filter((hostel) => {
    return hostel.id === Number(hostelId)
  })[0]


  // console.log(hostel)

  
  function openBooking(){
    const book = document.getElementById("booking")
    
    if(book.classList.contains("hideBooking")){
      book.classList.remove("hideBooking")
      book.classList.add("showBooking")
    }else{
      book.classList.add("hideBooking")
      book.classList.remove("showBooking")
    }

  }

 

  return (

    <section >
      <div style={{float: "left", marginLeft:"-430px"}}>

     <Link to ="/hostels"><button>back</button></Link>

        <Carousel showArrows={true}>
          {hostel.images.map((image, index) => (
            <div key={index}>
              <img src={`/src/images/${image}`} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div className="hostel-info">
          <h2> {hostel.name} </h2>
          <h4>Price:</h4> <p>{hostel.price}</p>
          <h4>Location:</h4> <p>{hostel.location}</p>
          <h4>Description</h4> <p>{hostel.description}</p>
          <div className="amenities">
            {hostel.amenities && hostel.amenities.length > 0 && (
              <>
                <p>
                  <FaBed /> {hostel.amenities.includes('Bed') && 'Bed'}
                </p>
                <p>
                  <FaWifi /> {hostel.amenities.includes('Wifi') && 'Wifi'}
                </p>
                <p>
                  <FaTh /> {hostel.amenities.includes('Bathroom') && 'Bathroom'}
                </p>
                <p>
                  <FaTv /> {hostel.amenities.includes('TV') && 'TV'}
                </p>
                <p>
                  <FaBath /> {hostel.amenities.includes('Bathroom') && 'Bathroom'}
                </p>
                <p>
                  <FaParking /> {hostel.amenities.includes('Free Parking') && 'Free Parking'}
                </p>
              </>
            )}
          </div>
          <Button className="action-button" onClick={() => addToFavorites(hostel)}>
            <BsHeart /> Add to Favorites
          </Button>
          {/* <Link to="/bookingdetails"> */}
            <button className="book-now-button"
            onClick={openBooking}
            >Book Now</button>
          {/* </Link> */}
        </div>
      </div>

      <div style={{position:"fixed",right:"30px"}} className='hideBooking' id="booking">
        <BookingDetails />
      </div>
    </section>

  );
};

export default HostelDetails;
