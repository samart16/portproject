import { Cities } from "../app/shared/Cities";
import { Col, Row } from "reactstrap";
import LocationCard from "./LocatonCard";

const LocationList = () => {
    return (
        <Row className='ms-auto'>
                {Cities.map((city) => {
                    return (
                    <Col
                        md='5'
                        className='m-4'
                        key={city.id}>
                            <LocationCard city={city}/>
                    </Col>
                );
            })}
        </Row>
    )
}

export default LocationList;