import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../contexts/Store";
import Loading from "../../components/Loading";
import { getError } from "../../utils/getError";

/*THIS SHOULD CONTAIN A SINGLE PRODUCT BASED ON PRODUCT SLUG*/

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAILED", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="product-details">
        <Row className="ms-auto">
          <Col md="6" className="m-2">
            <Card>
              <CardImg
                top
                src={product.image}
                alt={product.name}
                height="auto"
                width="450px"
              />
              <CardBody>
                <CardTitle className="detail">{product.name}</CardTitle>

                <CardText className="textcolor">{product.description}</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="in-stock" md={5}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col className="status">Price: </Col>
                  <Col className="status">${product.cost}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col className="status">Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <Badge bg="success" color="success">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge bg="danger" color="danger">
                        Unavailable
                      </Badge>
                    )}
                  </Col>
                </Row>
              </ListGroupItem>
              {product.countInStock === 0 ? (
                <Button variant="light" disabled>
                  Out of stock
                </Button>
              ) : (
                <ListGroupItem>
                  <Row>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleAddToCart();
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </Row>
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
