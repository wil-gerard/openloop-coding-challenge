import { useField } from 'formik';
import { Input } from 'antd';

const AddUserFormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Input aria-invalid={meta.touched && !!meta.error} className="text-input" style={meta.touched && meta.error ?  {border: '1px solid #ff0000'} : null} {...field} {...props} />
            <div style={{color: 'red', height: '20px', marginTop: '2px'}}>{meta.touched && meta.error ? `${meta.error}` : null}</div>       
        </>
    );
};

export default AddUserFormInput
