import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';



const RollsDetail = ( {roll} ) => {
    const { image, name, description, cost } = roll;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                    <CardText>{cost}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default RollsDetail;