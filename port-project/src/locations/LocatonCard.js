import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const LocationCard = (props) => {
    return (
        <Card>
            <CardImg
            width='100%'
            src={props.city.image}
            alt={props.city.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.city.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default LocationCard;