const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
};

const setLocalStorage = (key: string, value: any) => {
    localStorage
        .setItem(key, JSON.stringify(value));
}

export { getLocalStorage, setLocalStorage };