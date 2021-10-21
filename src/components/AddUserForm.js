import { useCallback, useEffect } from 'react';
// Formik is a form library that helps with data flow in form state, validation/error messages, and form submission handling
import { Formik, Form } from 'formik';
// Yup is an object schema validation library with it's own configuration prop in Formik called validationSchema
import * as yup from 'yup';
import FormTextInput from './FormTextInput';
import { Col, Row, Button } from 'antd';

const AddUserForm = ({ onSubmit }) => {

    useEffect(() => {
        document.querySelector("#firstNameInput").focus();
    });

    const handleSubmit = useCallback(
        (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
        },
        [onSubmit],
    );

    return (
        <Formik
            // <Formik> uses React Context to share values between components without having to explicity pass a prop
            // The useFormik hook(internally called in <Formik>) returns form state and helper methods in a variable called formik (this includes handleSubmit, handleChange, and values)
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                note: '',
            }}
            // We pass the <Formik> function a Yup validation schema object that is called when form values change or fields are blurred(event that fires when element has lost focus)
            validationSchema={yup.object({
                firstName: yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('First name is required'),
                lastName: yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Last name is required'),
                email: yup.string().email('Invalid email address').required('Email is required'),
                note: yup.string()
                    .max(50, 'Note must be less than 50 characters')
                    .required('Note is required'),
            })}
            // onSubmit will only be executed if the validate function returns an empty {} errors object
            onSubmit={handleSubmit}
        >
            {({ dirty, isValid }) => (
                <Form> {/* Render prop*/}
                    <Row gutter={[0, 8]} justify="space-between">
                        <Col span={24}>
                            <FormTextInput
                                id="firstNameInput"
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="First name"
                            />
                        </Col>
                        <Col span={24}>
                            <FormTextInput
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                            />
                        </Col>
                        <Col span={24}>
                            <FormTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="@email.com"
                            />
                        </Col>
                        <Col span={24}>
                            <FormTextInput
                                label="Note"
                                name="note"
                                type="text"
                                placeholder="Send us a note"
                            />
                        </Col>
                        <Col span={24}>
                            <Button htmlType={'submit'} disabled={!dirty || !isValid} type="submit">+ Add User</Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    );
};

export default AddUserForm;