import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse, 
    NavbarToggler, 
    Nav,
    NavItem,
 } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import  PackageLogo  from '../app/assets/img/icon.png';

 const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
              <img src={PackageLogo} alt='package logo' className='float-start' />
              <h2 className='mt-1'>QuickShip</h2>
              <h7>For Your Expedited Shipping Needs</h7>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa  fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/locations'>
                            <i className='fa  fa-lg' /> Locations
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa  fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        {/* <NavLink className='nav-link' to='/trackorder'>
                            <i className='fa  fa-lg' /> Track Order
                        </NavLink> */}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
 };

 export default Header;

