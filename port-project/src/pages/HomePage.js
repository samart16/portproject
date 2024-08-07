import {
  Button,
  Label,
  FormGroup,
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import ServicesList from "../app/features/ServicesList";
import CarouselInfo from "../components/CarouselInfo";
import { Slides } from "../app/shared/Slides";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { trackingValidation } from "../utils/trackingValidation";

const HomePage = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values: ", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };
  return (
    <Container>
      <Row className="row-content">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            trackingNum: "",
          }}
          onSubmit={handleSubmit}
          validate={trackingValidation}
        >
            
          <Form>
            <h3>QuickShip Tracker</h3>
            <FormGroup className="row-content" row>
              <Label htmlFor="lastName" md="1">
                Last Name
              </Label>
              <Col md="2">
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
                
              </Col>
              <Label htmlFor="email" md="1">
                Tracking #
              </Label>
              <Col md="3">
                <Field
                  name="trackingNum"
                  placeholder="Tracking Number"
                  className="form-control"
                />
                <ErrorMessage name="trackingNum">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
              <Col md="2">
                <Button type="submit" color="dark">
                  Track Order
                </Button>
              </Col>
            </FormGroup>
            
          </Form>
        </Formik>
      </Row>
      <Row className="row-content">
        <Col sm="6">
          <h3>Shipping you can count on</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-danger text-white">
              <h3>About Us</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">December 3, 2022</dd>
                <dt className="col-6">No. of Locations in 2023</dt>
                <dd className="col-6">25</dd>
                <dt className="col-6">No. of Reviews in 2019</dt>
                <dd className="col-6">4388</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">300</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <CarouselInfo slides={Slides} />
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>Our Services</h2>
        </Col>
        <ServicesList />
      </Row>
    </Container>
  );
};

export default HomePage;
