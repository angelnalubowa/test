import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

  const FilterCard = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearch = () => {
    // Implement the search functionality here
    // You can use the selectedRoom, priceRange, and selectedLocation states to filter your data
    console.log('Room:', selectedRoom);
    console.log('Price Range:', priceRange);
    console.log('Location:', selectedLocation);
  };

  return (
    <div className="filter-card">
      <select value={selectedRoom} onChange={handleRoomChange}>
        <option value="">Room Type</option>
        <option value="single">Single Room</option>
        <option value="double">Double Room</option>
      </select>

      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange}
        onChange={handlePriceChange}
      />
      <span>Price Range: ${priceRange}</span>

      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Location</option>
        <option value="location1">Location 1</option>
        <option value="location2">Location 2</option>
        <option value="location3">Location 3</option>
      </select>

      <button onClick={handleSearch}>
        <BsSearch />
      </button>
    </div>
  );
};

export default FilterCard;
