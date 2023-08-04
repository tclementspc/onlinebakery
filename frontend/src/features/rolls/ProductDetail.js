import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useGetAllProductsQuery } from "../productsApi";

const ProductDetail = () => {
  /*added to get access to the images */
  const { data } = useGetAllProductsQuery();

  /*const { image, name, cost, description } = product; */

  return (
    <Col md="5" className="m-1">
      <Card>
        <CardImg top src={data.image} alt={data.name} />
        <CardBody>
          <CardText className="textcolor">{data.name}</CardText>
          <CardText className="textcolor">{data.description}</CardText>
          <CardText className="textcolor">
            ${data.cost} dollars per dozen
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDetail;
