import {Container, Row, Col} from 'reactstrap';
import { Services } from '../shared/Services';
import Service from './Service';


const ServicesList = () => {

    return (
        <Col className='mt-4'>
            {Services.map((service) => {
                return (
                    <div className='d-flex mb-5' key={service.id}>
                        <Service service={service} />
                    </div>
                )
            })}
        </Col>
    )
}

export default ServicesList;