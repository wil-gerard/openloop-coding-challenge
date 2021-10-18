import { useField } from 'formik';


const InputStatus = ({ name }) => {
  const [, { error, touched }] = useField(name);
  return (
    <p style={{ color: 'red', height: '20px', marginTop: '2px' }}>{touched ? error : null}</p>
  )
};

export default InputStatus;
