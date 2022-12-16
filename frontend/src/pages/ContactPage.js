import { Container, Col, Row } from "reactstrap";
// import SubHeader from '../components/SubHeader';
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <Row className="row-content align-items=center">
        <Col sm="4" md="6" xs="12">
          <h5 className="location">Our Address</h5>
          <address>
            Decadent Bakery
            <br />
            1 Prosperity Way
            <br />
            Lawrenceville, GA 30044
            <br />
            U.S.A.
          </address>
        </Col>

        <Col>
          <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" id="telephone" />
            1-206-555-1234
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
            id="fake-email"
          >
            <i className="fa fa-envelope-o" />
            info@decadent.co
          </a>
        </Col>
      </Row>

      <Row className="row-content align-items-center">
        <Col xs="12">
          <h2 className="responses">Send Us Your Feedback</h2>
          <hr />
        </Col>

        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
