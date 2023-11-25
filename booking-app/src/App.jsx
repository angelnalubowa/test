import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingDetails from './components/bookingdetails/BookingDetails';
import ExplorePage from './components/explorepage/ExplorePage';
import Recommended from './components/recommended/Recommended';
import PopularHostels from './components/popular/Popular';
import TopRatedHostels from './components/toprated/TopRated';
import CreateAccount from './components/signup/CreateAccount';
import CreateAccount2 from './components/signup/CreateAccount2';
import HostelDetails from './hosteldetails/HostelDetails';
import Home from './components/home/Home';
import Login from './components/signin/Login';

function App() {
  return (
    <Routes>
      <Route path= "/" element={<Home/>} />
      <Route path="/signup" element={<CreateAccount/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/hostels" element={<ExplorePage />} />
      <Route path="/hostels/:id" element={<HostelDetails />} />
      {/* <Route path="/HostelDetails" element={<HostelDetails/>} /> */}
      <Route path="/CreateAccount2" element={<CreateAccount2/>} />
      <Route path="/BookingDetails" element={<BookingDetails/>} />
      <Route path= "/hostels" element={<ExplorePage />} />
      <Route path="/recommended" element={<Recommended/>} />
      <Route path="/popular" element={<PopularHostels/>} />
      <Route path="/toprated" element={<TopRatedHostels/>} />
    </Routes>
  );
}

export default App;

