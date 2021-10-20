import { useRef, useEffect, useCallback } from 'react';
// Formik is a form library that helps with data flow in form state, validation/error messages, and form submission handling
import { Formik, Field, Form, ErrorMessage } from 'formik';
// Yup is an object schema validation library with it's own configuration prop in Formik called validationSchema
import * as yup from 'yup';
import FormTextInput from './FormTextInput';


// ----- Have someone smarter than you explain each step below -- This is how Formik explained their handleChange method -------
// const [values, setValues] = React.useState({});

// const handleChange = event => {
//   setValues(prevValues => ({
//     ...prevValues,
//     // we use the name to tell Formik which key of `values` to update
//     [event.target.name]: event.target.value
//   });
// }

const AddUserForm = ({ onSubmit }) => {


    // const firstInputRef = useRef<HTMLInputElement>(null)

    // const focusInput = () => {
    //     if (firstInputRef.current) {
    //         firstInputRef.current.focus();
    //     }
    // }

    const handleSubmit = useCallback(
        (values, { resetForm, setSubmitting }) => {
            onSubmit(values);
            resetForm();
            setSubmitting(false);
            console.log('submitted')
        },
        [onSubmit],
    );

    // Instead of managing our form’s values on our own and writing our own custom event handlers for every single input, we can just use useFormik()
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
            // We pass the <Formik> function a submit function that will be called when the form is submitted
            // onSubmit will only be executed if the validate function returns an empty {} errors object
            onSubmit={handleSubmit}
        >
            <Form> {/* Render prop*/}
                <FormTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                />
                <FormTextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                />
                <FormTextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="yourEmail@here.com"
                />
                <FormTextInput
                    label="Note"
                    name="note"
                    type="text"
                    placeholder="Your note here"
                />

                <button type="submit">+ Add User</button>
            </Form>
        </Formik>
    );
};

export default AddUserForm;