import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";

//import { useGetProductQuery } from "../productsApi";
//import { fetchProductById } from "../productsSlice";

/*THIS SHOULD CONTAIN A SINGLE PRODUCT BASED ON PRODUCT ID*/

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
        dispatch({ type: "FETCH_FAILED", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  //const [product, setProduct] = useState({});
  //const { params } = useParams();
  //const { slug } = params;
  //const [loading, setLoading] = useState(false);
  /*added new line 13 */

  //useEffect(() => {
  //  const getProduct = async () => {
  //    setLoading(true);
  //    const request = await axios.get(`http://localhost:5000/products/${id}`);
  //    console.log(request);
  //    setProduct(request.data.results);
  //    setLoading(false);
  //    return request;
  //  };
  //  getProduct();
  //}, [id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
              <CardText className="textcolor">
                ${product.cost} dollars per dozen
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="5" className="textcolor">
          <h3 className="thanks">Click on "Shop" to buy items.</h3>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
