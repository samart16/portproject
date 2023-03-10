import { Button, Label, Col, FormGroup} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { trackingValidation } from '../utils/trackingValidation';


const TrackOrderForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values: ', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                trackingNum:''
            }}
            onSubmit={handleSubmit}
            validate={trackingValidation}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Tracking #
                    </Label>
                    <Col md='10'>
                        <Field
                            name='trackingNum'
                            placeholder='Tracking Number'
                            className='form-control'
                        />
                        <ErrorMessage name='trackingNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        < Button type='submit' color='dark'>
                            Track Order
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};



export default TrackOrderForm;