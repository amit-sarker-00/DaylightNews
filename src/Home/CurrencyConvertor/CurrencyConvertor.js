import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';

const CurrencyConvertor = () => {

    const [rates, setRates] = useState([]);
    const [fromCurrency, setFromCurrency] = useState()
    const [ftoCurrency, setToCurrency] = useState()

    useEffect(() => {
        axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI')
            .then(response => {
                const firstCurrency = Object.keys(response.data.rates)[1]
                setRates([response.base, ...Object.keys(response.data.rates)]);
                setFromCurrency(response.base)
                setToCurrency(firstCurrency)
            })
    }, []);

    // console.log(rates)


    return (
        <div>
            <h1>Convertor</h1>
            <div className='flex items-center'>
                <CurrencyRow rates={rates} />
                =
                <CurrencyRow rates={rates} />
            </div>
        </div>
    );
};

export default CurrencyConvertor;