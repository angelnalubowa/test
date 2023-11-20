import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Login from './Login';
import HostelDetails from './HostelDetails';
import CreateAccount2 from './CreateAccount2';
import BookingDetails from './BookingDetails';
import ExplorePage from './ExplorePage';

function App() {
  return (
    <Routes>
      <Route path= "/" element={<Home />} />
      <Route path="/signup" element={<CreateAccount/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/hostels" element={<ExplorePage />} />
      <Route path="/hostels/:id" element={<HostelDetails />} />
      {/* <Route path="/HostelDetails" element={<HostelDetails/>} /> */}
      <Route path="/CreateAccount2" element={<CreateAccount2/>} />
      <Route path="/BookingDetails" element={<BookingDetails/>} />
    </Routes>
  );
}

export default App;

