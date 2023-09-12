import { Col, Row, Button } from "reactstrap";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
//import { useState } from "react";
//import { useGetAllProductsQuery } from "../productsApi";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { addToCart } from "../cartSlice";
import { useReducer } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { useContext } from "react";
import { Store } from "../../contexts/Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductsList = () => {
  const navigate = useNavigate();
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  //const [products, setProducts] = useState([]);
  //const { data, error, isLoading } = useGetAllProductsQuery();
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  //const dispatch = useDispatch(); added line 51 for the cart
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const handleAddToCart = async (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

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
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Row className="ms-auto">
          {products.map((product) => (
            <Col md="5" className="m-4" key={product.slug}>
              <ProductCard product={product} />

              <Button
                onClick={() => {
                  handleAddToCart(product);
                  navigate("/cart");
                }}
                type="submit"
                active
                variant="custom"
                className="btn btn-custom"
              >
                Add to Cart
              </Button>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductsList;
