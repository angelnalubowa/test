
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from "react-icons/fa";
import './Navbar.css'


function MyNavbar() {
  
  function showsidebar() {
    const sidebar = document.querySelector('[data-sidebar]')

    if(sidebar.classList.contains('hide')){
      sidebar.classList.remove('hide')
      sidebar.classList.add('show')
    }

  }
  function showfiltercard() {
    const filtercard = document.querySelector('[data-filtercard]')

    if(filtercard.classList.contains('hide')){
      filtercard.classList.remove('hide')
     filtercard.classList.add('show')
    }

  }

  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">

      <FaBars className='icons' onClick={showsidebar}/>
       <h4>HostelBookings</h4> 
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={showfiltercard}>
        Filter
      </Dropdown.Toggle>

      </Dropdown>
    </Navbar>
  );
}

export default MyNavbar;