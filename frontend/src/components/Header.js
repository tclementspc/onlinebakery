import { useState, useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Badge,
} from "reactstrap";
//import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Store } from "../contexts/Store";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //  const { cartTotalQuantity } = useSelector((state) => state.cart);
  //added cart item to show how many items are in the cart
  const { state } = useContext(Store);
  const { cart } = state;

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
            <NavLink className="nav-link" to="/products">
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
              <i className="fa fa-shopping-cart" />
              Your Cart
              {cart.cartItems.length > 0 && (
                <Badge pill color="warning">
                  <strong>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </strong>
                </Badge>
              )}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
