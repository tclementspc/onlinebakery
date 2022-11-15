import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
//import { selectProductsById } from "../features/productsSlice";
import ProductsDetail from "../features/rolls/ProductsDetail";
import CommentsList from "../features/comments/CommentsList";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useSelector } from "react-redux";

const RollsDetailPage = () => {
  const { productId } = useParams();
  const product = useSelector(useGetAllProductsQuery(productId));

  return (
    <Container>
      <Row>
        <ProductsDetail roll={product} />
        <CommentsList className="textcolor" rollId={productId} />
      </Row>
    </Container>
  );
};

export default RollsDetailPage;
