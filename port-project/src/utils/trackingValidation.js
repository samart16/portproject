export const trackingValidation = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.trackingNum)) {
        errors.trackingNum = 'The tracking number should contain only numbers';
    } else if (values.trackingNum.length < 5) {
        errors.trackingNum = 'Must be at least 5 numbers';
    } else if (values.trackingNum.length > 11) {
        errors.trackingNum = 'Must be 11 numbers or less';
    }


    return errors;
}