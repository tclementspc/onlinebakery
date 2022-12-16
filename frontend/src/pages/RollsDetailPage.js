//import { Container, Row } from "reactstrap";
//import { useParams } from "react-router-dom";
//import { selectProductsById } from "../features/productsSlice";
//import ProductsDetail from "../features/rolls/ProductsDetail";
//import CommentsList from "../features/comments/CommentsList";
//import { useGetAllProductsQuery } from "../features/productsApi";
//import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

//const RollsDetailPage = () => {
//  const { productId } = useParams();
//  const {product, error, isLoading} = useSelector(useGetAllProductsQuery(productId));
//  const dispatch = useDispatch();

//  let content = null;

//      {isLoading ? (
//        <p>Loading...</p>
//      ) : error ? (
//        <p>An error occurred..</p>
//      ) :
//        content = (
//        <>
//          <ProductsDetail product={product} />
//          <CommentsList productId={productId} />
//        </>
//  );
//};

//export default RollsDetailPage;
