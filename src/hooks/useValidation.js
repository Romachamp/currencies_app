import {useEffect} from "react";

function checkValue(value) {
    if (value === null || value === undefined || value === '') {
        return false;
    } else {
        return true;
    }
}

function useValidation(value) {
    let result = true;
    result = checkValue(value);

    useEffect(() => {
      result = checkValue(value);
    }, [value]);

    return result;
}

export default useValidation;

// USAGE
// Create some value, which you want
// For example:
// let value = 'something';
// Call the hook inside empty variable, and as the param give value, which you want
// let isValidate = useValidation(value);
// If hook returns false, that means, that your value is empty or undefined or null
// If hook returns true, that means, that your value includes something
// so false - not validate, true - validate