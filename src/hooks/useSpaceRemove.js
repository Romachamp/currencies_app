import useValidation from "./useValidation";

function useSpaceRemove(data) {
    const isDataValidate = useValidation(data);
    if (isDataValidate) {
        const isDataIncludesSpaces = data.includes(' ');
        if (isDataIncludesSpaces) {
            const newData = data.toString().replaceAll(' ', '');
            return newData;
        } else {
            return data;
        }
    } else {
        return data;
    }
}

export default useSpaceRemove;

// USAGE
// You should call the hook such as this
// const removeDataSpaces = useSpaceRemove(value);
// Then you should provide value
// Then the hook will return your value without spaces, if this data includes them