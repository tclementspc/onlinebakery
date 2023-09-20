//selected items go this cart list of products to add and delete amounts
//import { useEffect } from "react";
/* useEffect is used to update the state of the cart as items added and removed */
//import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import {
//  addToCart,
//decreaseCart,
//removeFromCart,
// clearCart,
// getTotals,
//} from "../features/cartSlice";
import { useContext } from "react";
import { Store } from "../contexts/Store";
import axios from "axios";
import {
  Col,
  Row,
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
} from "reactstrap";
import MessageBox from "../components/MessageBox";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  // const cart = useSelector((state) => state.cart);
  //  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const handleRemoveFromCart = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div>
      <h2 className="begin-cart">Shopping Cart</h2>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox className="no-products">
              Cart is empty.
              <Link to="/shop"> Go Shopping </Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroupItem key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="image-fluid rounded img-thumbnail"
                      ></img>{" "}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      <Button
                        style={{ backgroundColor: "blue" }}
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        <i className="fa fa-minus-circle"></i>
                      </Button>{" "}
                      <span className="item-quantity">{item.quantity}</span>{" "}
                      <div className="test">
                        <Button
                          className="add"
                          style={{ backgroundColor: "blue" }}
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                          disabled={item.quantity === item.countInStock}
                        >
                          <i className="fa fa-plus-circle"></i>
                        </Button>
                      </div>
                    </Col>
                    <Col md={4}>
                      <strong>${item.cost} per dozen</strong>
                    </Col>
                    <Col md={2}>
                      <Button
                        style={{ backgroundColor: "blue" }}
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <CardBody>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3 className="sub-totalitems">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.cost * c.quantity, 0)}
                  </h3>
                </ListGroupItem>
                <ListGroupItem className="taxes">
                  **Taxes and shipping added at checkout
                </ListGroupItem>
                <ListGroupItem>
                  <div className="d-grid">
                    <Button
                      type="button"
                      onClick={() => checkoutHandler()}
                      style={{ backgroundColor: "#003399" }}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
