import { useRef, useEffect } from 'react';
// Formik is a form library that helps with data flow in form state, validation/error messages, and form submission handling
import { useFormik } from 'formik';
// Yup is an object schema validation library with it's own configuration prop in Formik called validationSchema
import * as yup from 'yup';


// ----- Have someone smarter than you explain each step below -- This is how Formik explained their handleChange method -------
// const [values, setValues] = React.useState({});

// const handleChange = event => {
//   setValues(prevValues => ({
//     ...prevValues,
//     // we use the name to tell Formik which key of `values` to update
//     [event.target.name]: event.target.value
//   });
// }


// custom validation function that returns an object with keys symmetrical to useFormik's values/initialValues
const validate = values => {
    const errors = {}; // ---- how does the errors object get assigned the keys of useFormik's values object? ----- errors is an object created from useFormik
    // errors is assigned to an empty object - if there are no errors, validate() returns this empty errors object
    if (!values.firstName) { // if the user has not entered anything into first name 
        errors.firstName = 'Required'; // then the errors object is assigns 'Required' to errors.firstName 
    } else if (values.firstName.length > 15) { // else, if the user has entered a name over 15 characters
        errors.firstName = 'Must be 15 characters or less'; // then the errors.firstName property is now 'Must be 15 characters or less'
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.note) {
        errors.note = 'Required';
    } else if (values.note.length > 50) {
        errors.note = 'Must be 50 characters or less';
    }

    return errors;
};

const AddUserForm = () => {


    // const firstInputRef = useRef<HTMLInputElement>(null)

    // const focusInput = () => {
    //     if (firstInputRef.current) {
    //         firstInputRef.current.focus();
    //     }
    // }

    // useFormik is a React hook that we pass our form's initialVales and submission function (onSubmit)
    const formik = useFormik({
        // We pass the useFormik() hook our intial form values
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            note: '',
        },
        // We pass the UseFormik() hook a validate function that is called when form values change or fields are blurred(event that fires when element has lost focus)
        validate,
        // We pass the UseFormik() hook a submit function that will be called when the form is submitted
        // onSubmit will only be executed if the validate function returns an empty {} errors object
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    // The useFormik hook returns form state and helper methods in a variable called formik (this includes handleSubmit, handleChange, and values)
    // Instead of managing our form’s values on our own and writing our own custom event handlers for every single input, we can just use useFormik()
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Handles blur events - most of the time we only want to show a field's error message after our user is done typing in that field
                // ref={firstInputRef}
                value={formik.values.firstName}
            />
            {/*If the objects touched AND error have a property of firstName return a div containing the error message. else return null */}
            {/*The touched object mirrors the shape of values/initialValues. With it's values(booleans) updated by handleBlur*/}
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null }     

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="note">Note</label>
            <input
                id="note"
                name="note"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.note}
            />
            {formik.errors.note ? <div>{formik.errors.note}</div> : null}

            <button type="submit">+ Add User</button>
        </form>
    );
};

export default AddUserForm;