const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"NPR", to:"USD", amount:15000})
currencyConverter.convert(15000).then((response) => {
    console.log(response) //or do something else
})