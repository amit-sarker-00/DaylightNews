import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';

const CurrencyConvertor = () => {

    const [rates, setRates] = useState([]);
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    // console.log(exchangeRate)

    var myHeaders = new Headers();
    myHeaders.append("apikey", "6jQG8cIhZv1DdEhVn3zczhyvKj3MQ24v");


    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=6jQG8cIhZv1DdEhVn3zczhyvKj3MQ24v')
            .then(response => {
                const firstCurrency = Object.keys(response.data.rates)[12]
                const secundCurrency = Object.keys(response.data.rates)[150]
                setRates([response.base, ...Object.keys(response.data.rates)]);
                setFromCurrency(secundCurrency)
                setToCurrency(firstCurrency)
                setExchangeRate(response.data.rates[firstCurrency])
                // console.log(response)
            })
    }, []);

    useEffect(() => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        if (fromCurrency != null && toCurrency != null) {
            fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${toCurrency}&base=${fromCurrency}`, requestOptions)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
                .catch(error => console.log('error', error));
        }



    }, [fromCurrency, toCurrency]);







    // console.log(rates)

    useEffect(() => {
        fetch()

    }, [fromCurrency, toCurrency])


    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }
    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }


    return (
        <div>
            <h1 className='text-2xl font-bold pb-2'>Currency Convertor</h1>
            <div className='flex items-center'>
                <CurrencyRow rates={rates} selectedCurrency={fromCurrency} onChangeCurrency={e => setFromCurrency(e.target.value)} amount={fromAmount} onChangeAmount={handleFromAmountChange} />
                <CurrencyRow rates={rates} selectedCurrency={toCurrency} onChangeCurrency={e => setToCurrency(e.target.value)} amount={toAmount} onChangeAmount={handleToAmountChange} />
            </div>
        </div>
    );
};

export default CurrencyConvertor;