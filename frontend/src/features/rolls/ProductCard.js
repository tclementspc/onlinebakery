import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  //I want the click on the button to put the item in the cart
  const { id, name, image, cost } = product;

  return (
    //  <Link to={`${id}`} style={{ textDecoration: "none" }}>
    <Card className="prices">
      <CardImg width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle className="bun">{name}</CardTitle>
      </CardImgOverlay>
      <CardText className="textcolor">${cost} dollars per dozen</CardText>
    </Card>
    //   </Link>
  );
};

export default ProductCard;
