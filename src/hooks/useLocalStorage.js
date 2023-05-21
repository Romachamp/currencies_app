import * as React from 'react';
import {useEffect, useState} from "react";

const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;

// USAGE
// In your file call the hook such as this:
// const [storageValue, setStorageValue] = useLocalStorage('storageTestValue', '');
// then you may take the value, and set it as well.