import {Container, Row, Col} from 'reactstrap';
import ServicesList from '../app/features/ServicesList';

const HomePage = () => {
    return(
        <Container>
            <Row className='row-content align-text-center align-items-center'>
                <Col md='12'>
                    <h3>Shipping you can count on</h3>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Our Services</h2>
                </Col>
                <ServicesList />
            </Row>
        </Container>
    )
}

export default HomePage;