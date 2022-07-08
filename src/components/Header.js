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



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar dark className='navigation' sticky='top' expand='md'>
            <NavbarBrand>

              <h1 className='mt-1'>DECADENT ROLLS</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>

                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/shop'>
                            <i className='fa fa-list fa-lg' /> Shop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>     
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/cart'>
                            <i className="fa fa-shopping-cart" /> Your Cart
                        </NavLink>  
                    </NavItem>
                </Nav>
            </Collapse>    
        </Navbar>

    )

}

export default Header;