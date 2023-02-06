import React, { useEffect, useState } from 'react';
import { BiHorizontalCenter, BiDownArrow } from "react-icons/bi";
import { AiOutlineSound, AiFillCopy } from "react-icons/ai";

import country from "../Translation/data"



const TranslationPage = () => {


    // console.log(country)

    useEffect(() => {

        const fromText = document.querySelector(".from-text")
        const toText = document.querySelector(".to-text")
        const exchangeIcon = document.querySelector(".exchange")
        const selectTag = document.querySelectorAll("select");
        const icons = document.querySelectorAll(".row")
        const TranslateBtn = document.querySelector("button")



        selectTag.forEach((tag, id) => {
            // console.log(id)

            // country code setup 
            for (let country_code in country) {
                console.log("1", country_code)
                let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "bn-IN" ? "selected" : ""


                let option = ` <option ${selected} value="${country_code}">${country[country_code]}</option >`;
                console.log("2", option)

                tag.insertAdjacentHTML("beforeend", option)
            }
        })

        // input text exchange 





    }, [])




    return (
        <>
            <div className='flex items-center justify-center px-3 '>
                <div className='h-[700px] p-5 w-full  shadow-md my-5'>
                    <div className='rounded-md   h-[400px] p-5 flex  '>
                        <textarea className='from-text w-full outline-none   resize-none border rounded-md p-3' spellCheck="false" placeholder='Enter Text' ></textarea>
                        <textarea className='to-text flex w-full outline-none   resize-none border rounded-md p-3 ' spellCheck="false" readOnly placeholder='Enter Text' ></textarea>
                    </div>
                    <div className='flex items-center justify-between px-5'>
                        <li className='flex items-center gap-5 text-xl'>
                            <div className='flex gap-5 '>
                                <AiOutlineSound className='row' />
                                <AiFillCopy className='row' />
                            </div>
                            <div>
                                <select></select>
                            </div>

                        </li>
                        <div className='text-xl'>
                            <BiHorizontalCenter className='exchange' />
                        </div>
                        <li className='flex items-center gap-3 text-xl'>
                            <div>
                                <select></select>
                            </div>

                            <div className='flex gap-5 '>
                                <AiFillCopy className='row' />
                                <AiOutlineSound className='row' />
                            </div>

                        </li>
                    </div>
                    <div className='m-5'>
                        <button className='w-full bg-black text-white 
                     py-2 cursor-pointer text-2xl font-bold'>Translate Text</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TranslationPage;