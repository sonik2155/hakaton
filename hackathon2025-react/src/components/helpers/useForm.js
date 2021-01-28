import React from "react"; 

function useForm() {
    const [values, setValues] = React.useState({});
    const [isValid, setIsValid] = React.useState(false)

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    setValues({...value, [name]: value});
    setIsValid(target.closest('form').checkValidity())
  }
  return {values, setValues, handleChange, isValid}

};

export default useForm;