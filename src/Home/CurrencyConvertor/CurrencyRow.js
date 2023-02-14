import React from 'react';
import "../CurrencyConvertor/Currency.css"

const CurrencyRow = ({ rates, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) => {

    return (
        <div className='border rounded'>
            <input type="number" className='input ' value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {
                    rates.map(option => (
                        <option className="w-16 " key={option} value={option}>{option}</option>

                    ))

                }
            </select>
        </div>
    );
};

export default CurrencyRow;