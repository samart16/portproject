import {Container, Row, Col} from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            
            <Row className='row-content'>
                <Col xs='3'>
                    <h1>Contact Us</h1>
                </Col>
            </Row>
            <Row className='row-content'>
                
                <Col md='10' >
                    <ContactForm  />
                </Col>
            </Row>
            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                    15 Shipping Street
                        <br />
                        Dallas, TX 75217
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                <a
                        role='button'
                        className='btn btn-link text-dark'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone'  /> 1-214-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link text-dark'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> shipping@quickship.co
                    </a>
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;