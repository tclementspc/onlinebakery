import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const RollsCard = ({ roll }) => {
  // console.log(campsite);
  
  const { id, image, name, cost } = roll;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width='100%' src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle className='bun'>{name}</CardTitle>
        </CardImgOverlay>
        <CardText className='textcolor'>{cost}</CardText>
        <CardText className='textcolor'>dollars per dozen</CardText>
      </Card>
    </Link>
  );
};

export default RollsCard;
