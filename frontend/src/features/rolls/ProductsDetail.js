import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useGetAllProductsQuery } from "../productsApi";

const ProductsDetail = () => {
  const { product } = useGetAllProductsQuery;

  return (
    <Col md="5" className="m-1">
      <Card>
        <CardImg top src={product.image} alt={product.name} />
        <CardBody>
          <CardText className="textcolor">{product.name}</CardText>
          <CardText className="textcolor">{product.description}</CardText>
          <CardText className="textcolor">
            ${product.cost} dollars per dozen
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductsDetail;
