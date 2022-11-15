import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { productsApi, useGetAllProductsQuery } from "../../productsApi";

const DisplayCard = ({ product }) => {
  const { product } = useGetAllProductsQuery();

  return (
    <Card>
      <CardImg src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>{product.cost}</CardText>
        <Button />
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
