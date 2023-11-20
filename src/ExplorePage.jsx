
import  { useState } from 'react';
import { BsStarFill} from 'react-icons/bs';
import { Card, Button} from 'react-bootstrap';
import { FaTh,FaHeart, FaCog, FaQuestion,FaStar  } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image2 from './images/hotel3.jpg';
import image3 from './images/hotel4.jpg';
import image1 from './images/background-image.jpg';
import image4 from './images/hotel2.jpg';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-item">
        <Link to="/dashboard">
          <FaTh className="icon" />
          Dashboard
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/all-hostels">
          <FaHeart className="icon" />
          All Hostels
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/recommended-hostels">
          <FaStar className="icon" />
          Recommended Hostels
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/popular-hostels">
          <FaStar className="icon" />
          Popular Hostels
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/top-rated-hostels">
          <FaStar className="icon" />
          Top Rated Hostels
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/favorites">
          <FaHeart className="icon" />
          My Favorite Hostels
        </Link>
      </div>
      <div className="divider"></div>
      <div className="sidebar-item">
        <Link to="/support">
          <FaQuestion className="icon" />
          Support
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/settings">
          <FaCog className="icon" />
          Settings
        </Link>
      </div>
    </>
  );
};

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
  const [searchQuery] = useState('');
  const [ setSelectedFilter] = useState('All hostels');
  const [currentPage, setCurrentPage] = useState(1);
  const [hostelsPerPage] = useState(6);
  const [filterHeading, setFilterHeading] = useState('All Hostels');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [showSidebar] = useState(false);


  const handleFilterChange = (filter) => {
    let updatedHostels = [];
    switch (filter) {
      case 'recommended':
        setFilterHeading('Recommended Hostels');
        setSelectedFilter('recommended');
        updatedHostels = recommendedHostels;
        break;
      case 'popular':
        setFilterHeading('Popular Hostels');
        setSelectedFilter('popular');
        updatedHostels = popularHostels;
        break;
      case 'Top Rated':
        setFilterHeading('Top Rated Hostels');
        setSelectedFilter('Top Rated');
        updatedHostels = topRatedHostels;
        break;
      default:
        setFilterHeading('All Hostels');
        setSelectedFilter('All');
        // eslint-disable-next-line no-unused-vars
        updatedHostels = hostels;
        break;
    }
  };

  const recommendedHostels = [
    {
      id: 1,
      name: 'Beach Paradise Hostel',
      location: 'Paradise Beach, ABC City',
      stars: 4.5,
      price: '$100/night',
      roomType: 'Double',
      image: image4,
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
      image: image2,
    },
    {
      id: 1,
      name: 'Beach Paradise Hostel',
      location: 'Paradise Beach, ABC City',
      stars: 4.5,
      price: '$100/night',
      roomType: 'Double',
      image: image1,
    },
];

  const popularHostels = [
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

  const handleSearch = () => {
    const filteredHostels = hostels.filter((hostel) =>
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    hostels(filteredHostels);
    setCurrentPage(1); 
    console.log('Location:', selectedLocation);
    console.log('Min Price:', minPrice);
    console.log('Max Price:', maxPrice);
    console.log('Room:', selectedRoom);
    console.log('Rating:', selectedRating);
  };

  const indexOfLastHostel = currentPage * hostelsPerPage;
  const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
  const currentHostels = hostels.slice(indexOfFirstHostel, indexOfLastHostel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="explore-page-container">
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <ul>
<li onClick={() => handleFilterChange('recommended')}>Recommended</li>
<li onClick={() => handleFilterChange('popular')}>Popular</li>
<li onClick={() => handleFilterChange('Top Rated')}>Top Rated</li>
</ul>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="sidebar">
      <div className='title'><h1>Explore</h1></div>
        {showSidebar && (
          // eslint-disable-next-line react/jsx-no-undef
          <><Sidebar
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            handleSearch={handleSearch} />
            <div className="sidebar-content">
              <div className="sidebar-item">
                <Link to="/dashboard">
                  <FaTh className="icon" />
                  Dashboard
                </Link>
              </div>
              <div className="sidebar-item">
                <Link to="/all-hostels">
                  <FaHeart className="icon" />
                  All Hostels
                </Link>
              </div>
              <div className="sidebar-item">
                <Link to="/recommended-hostels">
                  <FaStar className="icon" />
                  Recommended Hostels
                </Link>
              </div>
              <div className="sidebar-item">
                <Link to="/popular-hostels">
                  <FaStar className="icon" />
                  Popular Hostels
                </Link>
              </div>
              <div className="sidebar-item">
                <Link to="/top-rated-hostels">
                  <FaStar className="icon" />
                  Top Rated Hostels
                </Link>
              </div>
              <div className="sidebar-item">
                <Link to="/favorites">
                  <FaHeart className="icon" />
                  My Favorite Hostels
                </Link>
              </div>
              <div className="divider"></div>
              <div className="sidebar-item">
                <Link to="/support">
                  <FaQuestion className="icon" />
                  Support
                </Link>
              </div>
              <div className="sidebar-item">
                <Link to="/settings">
                  <FaCog className="icon" />
                  Settings
                </Link>
              </div>
            </div>
          </>
        )}
        <div className="filter-section">
          <h4>Location</h4>
          <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
            <option value="">All</option>
            <option value="kikumi_kikumi">Kikumi Kikumi</option>
            <option value="kikoni">Kikoni</option>
            <option value="wandegeya">Wandegeya</option>
            <option value="kavuule">Kavuule</option>
          </select>
        </div>

        <div className="filter-section">
          <h4>Price</h4>
          <div className="price-range">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)} />
            <span>-</span>
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)} />
          </div>
        </div>

        <div className="filter-section">
          <h4>Rooms</h4>
          <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
            <option value="">All</option>
            <option value="double_rooms">Double Rooms</option>
            <option value="single_rooms">Single Rooms</option>
            <option value="self_contained_rooms">Self-contained Rooms</option>
          </select>
        </div>

        <div className="filter-section">
          <h4>Ratings</h4>
          <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
            <option value="">All</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
          </select>
        </div>
      </div>
      <div className='filter'>
      <h2>{filterHeading}</h2>
      </div>
      <div className="hostel-cards">
        {currentHostels.map((hostel) => (
          // <Link to={`/hostels/${hostel.id}`}>
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
          // </Link>
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
