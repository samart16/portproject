import {Container, Row, Col} from 'reactstrap';
import LocationList from '../locations/LocationList';

const Locations = () => {
    return (
        <Container>
            <Row className='row-content'>
                <h1>Current Locations</h1>
            </Row>
            <LocationList/>
        </Container>
    );
}

export default Locations;