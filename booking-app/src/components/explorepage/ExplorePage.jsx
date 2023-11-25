import './ExplorePage.css'
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


export const hostels = [
  {
    id: 1,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image1,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 2,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image2,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 3,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image3,
    description: 'A beautiful beachfront villa with stunning views.',
    amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
    images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 4,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image4,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 5,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image1,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hostel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 6,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image2,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 7,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image3,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 8,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image4,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 9,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image1,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],

  },
  {
    id: 10,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image2,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 11,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image3,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 12,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image4,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
  {
    id: 13,
    name: 'Beach Paradise Hostel',
    location: 'Paradise Beach, ABC City',
    stars: 4.5,
    price: '$100/night',
    roomType: 'Double',
    image: image1,
    description: 'A beautiful beachfront villa with stunning views.',
   amenities: ['Wifi', 'Bathroom', 'TV', 'Free Parking'],
   images: ['hotel3.jpg', 'hotel2.jpg', 'hotel4.jpg'],
  },
];
const ExplorePage = () => {
  // const [ setSelectedFilter] = useState('All hostels');
  const [currentPage, setCurrentPage] = useState(1);
  const [hostelsPerPage] = useState(6);
   const [filterHeading] = useState('All Hostels');
  const indexOfLastHostel = currentPage * hostelsPerPage;
  const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
  const currentHostels = hostels.slice(indexOfFirstHostel, indexOfLastHostel);

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
        {Array.from({ length: Math.ceil(hostels.length / hostelsPerPage) }, (_, i) => (
          <Button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </Button>
        ))}
      </div>
      </div>
      
  );
};

export default ExplorePage;
