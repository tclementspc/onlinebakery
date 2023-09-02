import { Col, Row, Button } from "reactstrap";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
//import { useState } from "react";
//import { useGetAllProductsQuery } from "../productsApi";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../cartSlice";
import { useReducer } from "react";
import axios from "axios";

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

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  //const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>An error occurred..</div>
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
