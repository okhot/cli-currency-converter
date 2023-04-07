import fetch from 'node-fetch';

async function dataFetch() {
    return fetch("https://api.freecurrencyapi.com/v1/latest?apikey=UMR7yJQUOkAhxW5e7jpEhvmVQmUXgFWFiMQl1JIY")
        .then((res) => res.json())
        .then((res) => Object.values(res))
        .catch((err) => console.log('Internal error'))
}

export default dataFetch