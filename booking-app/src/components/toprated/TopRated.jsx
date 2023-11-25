import '../explorepage/ExplorePage.css'
import  { useState } from 'react';
import { BsStarFill} from 'react-icons/bs';
import { Card, Button} from 'react-bootstrap';
import image2 from '../../images/hotel3.jpg';
import image3 from '../../images/hotel4.jpg';
import image1 from '../../images/background-image.jpg';
import image4 from '../../images/hotel2.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';


export default function Recommended() {
    // const [ setSelectedFilter] = useState('All hostels');
    const [currentPage, setCurrentPage] = useState(1);
    const [hostelsPerPage] = useState(6);
     const [filterHeading] = useState('TopRated Hostels');

  const topRatedHostels = [
    {
      id: 1,
      name: 'Beach Paradise Hostel',
      location: 'Paradise Beach, ABC City',
      stars: 4.5,
      price: '$100/night',
      roomType: 'Double',
      image: image1,
    },
    {
      id: 1,
      name: 'Beach Paradise Hostel',
      location: 'Paradise Beach, ABC City',
      stars: 4.5,
      price: '$100/night',
      roomType: 'Double',
      image: image2,
    },
    {
      id: 1,
      name: 'Beach Paradise Hostel',
      location: 'Paradise Beach, ABC City',
      stars: 4.5,
      price: '$100/night',
      roomType: 'Double',
      image: image3,
    },
    {
      id: 1,
      name: 'Beach Paradise Hostel',
      location: 'Paradise Beach, ABC City',
      stars: 4.5,
      price: '$100/night',
      roomType: 'Double',
      image: image4,
    },
  ];
  const indexOfLastHostel = currentPage * hostelsPerPage;
  const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
  const currentHostels = topRatedHostels.slice(indexOfFirstHostel, indexOfLastHostel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="explore-page-container">
    <Navbar/>
    <Sidebar/>
       <div className='filter'>
      <h2>{filterHeading}</h2>
      </div> 
      <div className="hostel-cards">
        {currentHostels.map((hostel) => (
          
          <Card key={hostel.id} className="hostel-card" >
            <div className='card-img'>
             <Link to={`/hostels/${hostel.id}`}>
              <Card.Img variant="top" src={hostel.image} alt="" />
              </Link>
            </div>
            <Card.Body>
              <Card.Title><h3>{hostel.name}</h3></Card.Title>
              <Card.Text>{hostel.location}</Card.Text>
              <Card.Text>
                <BsStarFill className="star-icon" /> {hostel.stars}
              </Card.Text>
              <Card.Text>{hostel.price}</Card.Text>
              <Card.Text>Room Type: {hostel.roomType}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div><div className="pagination">
        {Array.from({ length: Math.ceil(topRatedHostels.length / hostelsPerPage) }, (_, i) => (
          <Button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Button>
        ))}
      </div>
      </div>
      
  )
}

