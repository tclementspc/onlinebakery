import { Card, CardImg, CardText, CardBody, Col, Button } from 'reactstrap';



const RollsDetail = ({roll}) => {
    const { image, name, description, cost } = roll;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText className='textcolor'>{description}</CardText>
                    <CardText className='textcolor'>{cost}</CardText>
                    <CardText className='textcolor'>dollars per dozen</CardText>
                </CardBody>
                <Button variant="warning" type='submit' active>Buy</Button>{' '}
            </Card>
        </Col>
    );
};

export default RollsDetail;