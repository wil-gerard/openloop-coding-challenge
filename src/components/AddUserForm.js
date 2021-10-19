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
        // We pass the UseFormik() hook a Yup validation schema object that is called when form values change or fields are blurred(event that fires when element has lost focus)
        validationSchema: yup.object({
            firstName: yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            note: yup.string()
                .max(50, 'Note must be less than 50 characters')
                .required('Required'),
        }),
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