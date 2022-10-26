import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { countCartItems } = props;
  //added cart item to show how many items are in the cart

  return (
    <Navbar dark className="navigation" sticky="top" expand="md">
      <NavbarBrand>
        <h2 className="mt-1" id="bakeryname">
          DECADENT BAKERY
        </h2>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/shop">
              <i className="fa fa-list fa-lg" /> Menu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/cart">
              <i className="fa fa-shopping-cart" /> Your Cart
              {countCartItems ? (
                //conditional render of bage and no of cart items
                <button className="badge">{countCartItems}</button>
              ) : (
                ""
              )}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
