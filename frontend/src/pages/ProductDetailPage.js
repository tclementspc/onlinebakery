import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectProductById } from "../features/productsSlice";
import ProductDetail from "../features/rolls/ProductDetail";
import CommentsList from "../features/comments/CommentsList";
import { useGetAllProductsQuery } from "../features/productsApi";
//import { useGetAllCommentsQuery } from "../features/commentsApi";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SubHeader from "../components/SubHeader";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = useSelector(selectProductById(productId));

  const isLoading = useSelector((state) => state.products.isLoading);
  const errMsg = useSelector((state) => state.products.errMsg);

  let content = null;

  /*{
   isLoading ? (
      <p>
        <Loading />
        ...
      </p>
    ) : errMsg ? (
       <p>
        content = <Error errMsg={errMsg} />
      </p>
   ) : (
      (content = (
*/
  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  } else {
    content = (
      <>
        <ProductDetail product={product} />;
        <CommentsList productId={productId} />
      </>
    );
  }
  return (
    <Container>
      {product && <SubHeader current={product.name} detail={true} />}
      <Row>{content}</Row>
    </Container>
  );
};

export default ProductDetailPage;
