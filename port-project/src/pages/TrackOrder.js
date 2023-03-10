import {Container, Row, Col} from 'reactstrap';
import  TrackOrderForm  from '../components/TrackOrderForm'
import SendMail from '../app/assets/img/newmail.png'

const TrackOrder = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col xs='5'>
                    <h2>Enter Your Order Information</h2>
                    <img src={SendMail} alt='package logo'  />
                </Col>
                <Col>
                    <TrackOrderForm/>
                </Col>
            </Row>
        </Container>
    )
}

export default TrackOrder;