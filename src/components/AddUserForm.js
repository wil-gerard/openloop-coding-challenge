import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddUserForm = () => (
    <Formik
        initialValues={{ firstName: '', lastName: '', email: '', note: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({ isSubmitting }) => (
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    <Field type="text" name="note" />
                    <ErrorMessage name="note" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    + Add User
                </button>
            </Form>
        )}
    </Formik>

);

export default AddUserForm;