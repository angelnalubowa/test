import  { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
export default function FilterCard() {
    const [selectedLocation, setSelectedLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  return (
    <div className='hide filtercard' data-filtercard>
        <Dropdown>
        <Dropdown.Menu>
        <Dropdown.Item>
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
           </Dropdown.Item>
        <Dropdown.Item> 
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
        </Dropdown.Item>
        <Dropdown.Item>
        <div className="filter-section">
          <h4>Rooms</h4>
          <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
            <option value="">All</option>
            <option value="double_rooms">Double Rooms</option>
            <option value="single_rooms">Single Rooms</option>
            <option value="self_contained_rooms">Self-contained Rooms</option>
          </select>
        </div>  
           </Dropdown.Item>
           <Dropdown.Item>
        <div className="filter-section">
          <h4>Ratings</h4>
          <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
            <option value="">All</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
          </select>
        </div>
        </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
