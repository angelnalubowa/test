import {Outlet} from 'react-router-dom'
import MyNavbar from '../navbar/Navbar'

const Layout = () => {

  return (
    <div>
        <MyNavbar />
        <Outlet />
    </div>
  )
}

export default Layout