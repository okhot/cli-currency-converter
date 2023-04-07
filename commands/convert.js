import dataFetch from "../api/dataFetch.js";

const currencyConverter = async (amount, from, to) => {
    const currency = await dataFetch()
    try {
        const currencyObj = await currency[0];
        const result = (+amount / currencyObj[from]) * currencyObj[to];
        console.log(`${amount} ${from} is equivalent to ${result?.toFixed(2)} ${to}`);
    } catch (err) {
        console.log('Check network connection')
    }

}

export default currencyConverter;