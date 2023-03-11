import {Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap';
import ServicesList from '../app/features/ServicesList';
import CarouselInfo from '../components/CarouselInfo';


const HomePage = () => {
    return(
        <Container>
            <Row className='row-content align-text-center align-items-center'>

            </Row>
            <Row className='row-content'>
                <Col sm='6'>
                <h3>Shipping you can count on</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>About Us</h3>
                        </CardHeader>
                        <CardBody>
                        <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>December 3, 2022</dd>
                                <dt className='col-6'>No. of Locations in 2023</dt>
                                <dd className='col-6'>25</dd>
                                <dt className='col-6'>No. of Reviews in 2019</dt>
                                <dd className='col-6'>4388</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>300</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <CarouselInfo />
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