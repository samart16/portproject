import {Container, Row, Col} from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            
            <Row className='row-content'>
                <Col xs='12'>
                    <h1>Send Us Your Feedback</h1>
                    <br />
                </Col>
                
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                    1 Nucamp Way
                        <br />
                        Seattle, WA 98001
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> campsites@nucamp.co
                    </a>
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;