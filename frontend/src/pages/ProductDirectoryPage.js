import { Container } from "reactstrap";
// import Header from '../components/Header';
import ProductsList from "../features/rolls/ProductsList";
//import SubHeader from "../components/SubHeader";
//adding subheader so that I can pull out individual roll to get the description took it out 7-26-23

const ProductDirectoryPage = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  );
};

export default ProductDirectoryPage;
