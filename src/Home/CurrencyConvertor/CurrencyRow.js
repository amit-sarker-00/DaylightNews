import React from 'react';
import "../CurrencyConvertor/Currency.css"

const CurrencyRow = ({ rates }) => {

    return (
        <div>
            <input type="number" className='input' />
            <select>
                {
                    rates.map(option => (
                        <option key={option} value={option}>{option}</option>

                    ))

                }
            </select>
        </div>
    );
};

export default CurrencyRow;