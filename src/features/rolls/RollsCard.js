import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const RollsCard = ({ roll, onAdd }) => {
  // console.log(campsite);
  //I want the click to put the item in the cart

  const { id, image, name, cost } = roll;
  return (
    <Link to={`${id}`} style={{ textDecoration: "none" }}>
      <Card className="prices">
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle className="bun">{name}</CardTitle>
        </CardImgOverlay>
        <CardText className="textcolor">${cost} dollars per dozen</CardText>
        <Button
          variant="warning"
          type="submit"
          active
          onClick={() => onAdd(roll)}
        >
          Add to Cart
        </Button>
      </Card>
    </Link>
  );
};

export default RollsCard;
