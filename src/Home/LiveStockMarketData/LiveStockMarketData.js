// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Plot from 'react-plotly.js';
// import HomePageSnipper from '../HomePageStorySection/HomePageSnipper';
// import "../LiveStockMarketData/LiveStockMarket.css"



// const LiveStockMarketData = () => {
//     const [isLoading, setLoading] = useState(false);
//     const [timeSeries, setTimeSeries] = useState([])
//     const [allValue, setAllValue] = useState([])
//     const [open, setOpen] = useState([])
//     const [high, setHight] = useState([])
//     const [low, setLow] = useState([])
//     const [close, setClose] = useState([])
//     const [adjusted, setAdjusted] = useState([])


//     const [selectedOption, setSelectedOption] = useState("AMZN");


//     const API_KEY = "Z957THS43ISRZ467"
//     // const StockSymbol = "AMZN"

//     console.log(selectedOption)
//     const handleChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     useEffect(() => {
//         let StockChartTimeValue = [];
//         let StockChartOpenValue = [];
//         let StockChartHighValue = [];
//         let StockChartLowValue = [];
//         let StockChartCloseValue = [];
//         let StockChartAdjustValue = [];
//         setLoading(true);
//         fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${selectedOption}&outputsize=compact&apikey=${API_KEY}`)
//             .then(res => res.json())
//             .then(data => {
//                 setAllValue(data["Time Series (Daily)"])
//                 for (var key in data["Time Series (Daily)"]) {
//                     // console.log(key)
//                     StockChartTimeValue.push(key)
//                     StockChartOpenValue.push(data["Time Series (Daily)"][key]["1. open"])
//                     StockChartHighValue.push(data["Time Series (Daily)"][key]["2. high"])
//                     StockChartLowValue.push(data["Time Series (Daily)"][key]["3. low"])
//                     StockChartCloseValue.push(data["Time Series (Daily)"][key]["4. close"])
//                     StockChartAdjustValue.push(data["Time Series (Daily)"][key]["5. adjusted close"])
//                 }
//                 setTimeSeries(StockChartTimeValue)
//                 setOpen(StockChartOpenValue)
//                 setHight(StockChartHighValue)
//                 setLow(StockChartLowValue)
//                 setClose(StockChartCloseValue)
//                 setAdjusted(StockChartAdjustValue)
//                 setLoading(false);

//             })



//     }, [selectedOption])

//     // console.log("date", timeSeries)
//     // console.log("open", open)
//     // console.log("high", high)
//     // console.log("low", low)
//     // console.log("close", close)
//     // console.log("adjusted", adjusted)
//     console.log(allValue)








//     return (
//         <div className=''>
//             {
//                 isLoading ? <HomePageSnipper /> : <div>
//                     <div >
//                         <p className='text-1xl py-2'>Select your Stock by Name </p>
//                         <select className='border p-2 text-1xl' value={selectedOption} onChange={handleChange}>
//                             <option value="AMZN" disabled>AMAZON</option>
//                             <option value="WMT">Walmart</option>
//                             <option value="META">FACEBOOK</option>
//                             <option value="GOOGL">GOOGLE</option>
//                             <option value="AAPL">Apple</option>
//                             <option value="TSLA">Tesla</option>
//                             <option value="V">Visa</option>
//                             <option value="MSFT">Microsoft</option>
//                             <option value="JNJ">Johnson & Johnson</option>
//                             <option value="UBER">UBER
//                             </option>
//                         </select>

//                     </div>

//                     <p className='text-center text-2xl font-bold'>STOCK NAME {selectedOption}</p>

//                     <Plot
//                         data={[
//                             {
//                                 x: [timeSeries, low],
//                                 y: open,
//                                 type: 'scatter',
//                                 mode: 'lines+markers',
//                                 marker: { color: 'red' },
//                             },

//                         ]}

//                         layout={{ autosize: true, }}
//                         useResizeHandler
//                         className="w-full h-full "

//                     />

//                     <div className='pt-10'>
//                         {isLoading ? (
//                             <>
//                                 <HomePageSnipper />
//                                 <h1>No Data Available yet</h1>
//                             </>
//                         ) : (
//                             <>
//                                 <p className='p-2 text-2xl '>Last 100 Day Data</p>
//                                 <table className="table w-full">
//                                     <thead>
//                                         <tr>
//                                             <th>Date</th>
//                                             <th>Open</th>
//                                             <th>High</th>
//                                             <th>Low</th>
//                                             <th>Close</th>
//                                             <th>adjusted</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {Object.entries(allValue).map(([key, value]) => (
//                                             <tr key={key}>
//                                                 <td>{key}</td>
//                                                 <td>{value["1. open"]}</td>
//                                                 <td>{value["2. high"]}</td>
//                                                 <td>{value["3. low"]}</td>
//                                                 <td>{value["4. close"]}</td>
//                                                 <td>{value["5. adjusted close"]}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </>

//                         )}

//                     </div>
//                 </div>
//             }


//         </div >
//     );
// };

// export default LiveStockMarketData;


// // npm install react - plotly.js plotly.js