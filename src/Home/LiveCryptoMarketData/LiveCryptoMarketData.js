import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import Plot from 'react-plotly.js';
import { transform } from 'typescript';
import "../LiveCryptoMarketData/CustomCryptoImage.css"
import LiveBitcoinPlatprom from './LiveBitcoinPlatprom';
import LiveCardanoCryptoPlatprom from './LiveCardanoCryptoPlatprom';
import LiveDogecoinCryptoPlatProm from './LiveDogecoinCryptoPlatProm';
import LiveEthereumCryptoPlatprom from './LiveEthereumCryptoPlatprom';

const LiveCryptoMarketData = () => {





    return (
        <div className=''>

            <div className='flex flex-col md:flex-row'>
                <div className='py-2 lg:py-5 pt-10 lg:pt-36'>
                    <div className='text-center pt-14 pb-5 mx-auto'>
                        <h1 className='text-lg lg:text-7xl font-bold'>The World's Leading <br /> Cryptocurrency platform</h1>

                    </div>
                    <div className='flex items-center 
                 gap-3 justify-center'>
                        <FaCheck className='bg-blue-500 p-px text-white rounded-full block' />
                        <p className='text-sm lg:text-2xl'>Trusted by more than 80M users world-wide</p>
                    </div>
                    <div className='flex items-center 
                 gap-3 mx-auto justify-center'>
                        <FaCheck className='bg-blue-500 p-px text-white rounded-full' />
                        <p className='text-sm lg:text-2xl'>Leader in regulatory compliance and security certifications</p>
                    </div>
                    <div className='flex items-center 
                 gap-3 mx-auto justify-center '>
                        <FaCheck className='bg-blue-500 p-px text-white rounded-full' />
                        <p className='text-sm lg:text-2xl'>The industry’s most comprehensive insurance coverage and verified proof of reserves</p>
                    </div>
                    <div className='text-center pt-20 pb-5 mx-auto '>
                        <p className='text-sm lg:text-2xl font-bold'>SECURELY See, looking, STORE, SEND and TRACK</p>
                        <h1 className='text-lg lg:text-7xl font-bold pb-2'>See crypto Data with your trust</h1>
                        <p className='text-sm lg:text-2xl font-semibold'>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</p>
                    </div>
                </div>
                <div className='cryptoImage mx-auto  ' >
                    <img className=' mx-auto w-[600px] ' src="https://crypto.com/static/4a98bd03290e8a209151cc1e56056594/ff3b2/buy-and-sell.png" alt="" />
                </div>
            </div>

            <LiveBitcoinPlatprom />
            {/* <LiveEthereumCryptoPlatprom /> */}
            {/* <LiveCardanoCryptoPlatprom /> */}
            {/* <LiveDogecoinCryptoPlatProm /> */}

        </div >
    );
};

export default LiveCryptoMarketData;