import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const DisplayCard = ({ roll }) => {
    const { image, name, description, cost } = roll;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
                <CardText>{cost}</CardText>
                <Button />
            </CardBody>
        </Card>

    );
};

export default DisplayCard;

