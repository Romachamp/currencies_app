function useNumberFormat(num) {
    const formatedAmount = new Intl.NumberFormat().format(num);
    return formatedAmount;
}

export default useNumberFormat;

// USAGE
// You create a variable such as this
// const num = useNumberFormat(30000);
// In useNumberFormat you pass a number, which you need
// It returns formatted string
// 30 000