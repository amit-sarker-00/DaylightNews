import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import HomePageSnipper from '../HomePageStorySection/HomePageSnipper';

const LiveBitcoinPlatprom = () => {
    const [isLoading, setLoading] = useState(false);

    const [allValue, setAllValue] = useState([])
    const [open, setOpen] = useState([])
    const [close, setClose] = useState([])
    const [selectedOption, setSelectedOption] = useState("BTC");


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };



    const API_KEY = "Z957THS43ISRZ467"

    const symbol = {
        ETH: "ETH",
        BTC: "BTC",
        ADA: "ADA",
        DOGE: "DOGE",
        DOT: "DOT"

    }



    useEffect(() => {
        let StockChartOpenValue = [];
        let StockChartCloseValue = [];

        setLoading(true)

        fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${selectedOption}&outputsize=compact&market=CNY&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setAllValue(data["Time Series (Digital Currency Daily)"])
                for (var key in data["Time Series (Digital Currency Daily)"]) {
                    StockChartCloseValue.push(data["Time Series (Digital Currency Daily)"][key]["6. market cap (USD)"])
                    StockChartOpenValue.push(key)
                }

                setClose(StockChartOpenValue)
                setOpen(StockChartCloseValue)
                setLoading(false)
            })
    }, [selectedOption])

    console.log(open)


    return (
        <>

            {
                isLoading ? <HomePageSnipper /> : <div>
                    <div >
                        <p className='text-1xl py-2'>Select your Stock by Name </p>
                        <select className='border p-2 text-3xl' value={selectedOption} onChange={handleChange}>
                            <option value="BTC" >Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="DOGE">Dogecoin</option>
                            <option value="DOT">Polkadot</option>
                        </select>

                    </div>

                    <div className=' text-black
             mx-auto flex items-center flex-wrap gap-5 mt-20 justify-center'>
                        {Object.entries(allValue).slice(0, 1).map(([key, value]) => (
                            <>

                                <p className='text-2xl font-bold'>{selectedOption}</p>
                                <p className='text-2xl text-green-400'>${value["5. volume"]}</p>
                                <p className='text-2xl text-red-600'>-{value["3b. low (USD)"]}</p>
                                <p className='text-2xl '>${value["6. market cap (USD)"]}</p>
                            </>


                        ))}


                    </div>
                    <div className='mx-auto  text-center'>
                        <Plot
                            data={[
                                {
                                    x: [close, open],
                                    y: open,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: 'red' },
                                },

                            ]}

                            layout={{ autosize: true, }}
                            useResizeHandler
                            className="mx-auto w-full h-full"

                        />
                    </div>
                </div>
            }

        </>
    );
};

export default LiveBitcoinPlatprom;