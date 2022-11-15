import { Col, Row, Button } from "reactstrap";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../productsApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../cartSlice";

const ProductsList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred..</p>
      ) : (
        <Row className="ms-auto">
          {data?.map((product) => (
            <Col md="5" className="m-4" key={product.id}>
              <ProductCard product={product} />
              <Button
                onClick={() => {
                  handleAddToCart(product);
                  navigate("/cart");
                }}
                type="submit"
                active
                className="btn btn-dark"
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
