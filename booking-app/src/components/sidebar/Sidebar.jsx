import { FaHeart, FaCog, FaQuestion} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {AiFillHome, AiFillTag, AiFillSignal } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import { MdOutlineExplore, MdRecommend  } from "react-icons/md";

import './Sidebar.css'
export default function Sidebar() {

    
  function closeSidebar(){
    
    const closeSidebar = document.querySelector('[data-sidebar]')

    if(closeSidebar.classList.contains('show')){
      closeSidebar.classList.remove('show')
      closeSidebar.classList.add('hide')
    }
  }
  return (
    <div className='hide sidebar' data-sidebar>
        <IoClose className='close'  onClick={closeSidebar}/>

        <div className="sidebar-item">
        <Link to="/">
          <AiFillHome className="icon" />
          Home
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/hostels">
          <MdOutlineExplore className="icon" />
          Explore
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/recommended">
          <MdRecommend  className="icon" />
          Recommended Hostels
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/popular">
        <AiFillTag className="icon" />
          Popular Hostels
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/top-rated">
        <AiFillSignal  className="icon" />
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
  )
}
