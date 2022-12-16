import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import decbakerylogo4 from "../app/assets/images/decbakerylogo4.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  //added cart item to show how many items are in the cart

  return (
    <Navbar dark className="navigation" sticky="top" expand="md">
      <NavbarBrand>
        <h2 className="mt-1" id="bakeryname">
          Decadent Bakery
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
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info-circle fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/shop">
              <i className="fa fa-list fa-lg" /> Shop
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
              <span id="bag-quantity">
                <span className="cart-totalQ">{cartTotalQuantity}</span>
              </span>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
