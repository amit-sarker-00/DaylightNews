import React, { useEffect, useState } from "react";
import { BiHorizontalCenter, BiDownArrow } from "react-icons/bi";
import { AiOutlineSound, AiFillCopy } from "react-icons/ai";

import country from "../Translation/data";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const TranslationPage = () => {
	// console.log(country)

	useEffect(() => {
		const fromText = document.querySelector(".from-text");
		const toText = document.querySelector(".to-text");
		const exchangeIcon = document.querySelector(".exchange");
		const selectTag = document.querySelectorAll("select");
		const icons = document.querySelectorAll(".row i");
		const TranslateBtn = document.querySelector("button");

		console.log(icons);

		selectTag.forEach((tag, id) => {
			// console.log(id)

			// country code setup
			for (let country_code in country) {
				// console.log("1", country_code)
				let selected =
					id == 0
						? country_code == "en-GB"
							? "selected"
							: ""
						: country_code == "bn-IN"
							? "selected"
							: "";

				let option = ` <option ${selected} value="${country_code}">${country[country_code]}</option >`;
				// console.log("2", option)

				tag.insertAdjacentHTML("beforeend", option);
			}
		});

		// input text exchange

		exchangeIcon.addEventListener("click", () => {
			let tempText = fromText.value;
			let tempLang = selectTag[0].value;
			console.log(tempText);
			// console.log(tempLang);
			fromText.value = toText.value;
			toText.value = tempText;
			// console.log(toText.value)
			// console.log(fromText.value)
			selectTag[0].value = selectTag[1].value;
			selectTag[1].value = tempLang;
		});

		fromText.addEventListener("keyup", () => {
			if (!fromText.value) {
				toText.value = "";
			}
		});

		TranslateBtn.addEventListener("click", () => {
			let text = fromText.value.trim();
			let translateFrom = selectTag[0].value;
			let translateTo = selectTag[1].value;

			if (!text) {
				return;
			}
			toText.setAttribute("placeholder", "Translating...");
			let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

			fetch(apiUrl)
				.then(res => res.json())
				.then(data => {
					toText.value = data.responseData.translatedText;
					data.matches.forEach(data => {
						if (data.id === 0) {
							toText.value = data.translation;
						}
					});
					toText.setAttribute("placeholder", "Translation");
				});
		});

		icons.forEach(icon => {
			icon.addEventListener("click", ({ target }) => {
				// if (!fromText.value || !toText.value) return
				if (target.classList.contains("fa-copy")) {
					if (target.id == "from") {
						navigator.clipboard.writeText(fromText.value);
					} else {
						navigator.clipboard.writeText(toText.value);
					}
				} else {
					let utterance;
					if (target.id == "from") {
						utterance = new SpeechSynthesisUtterance(fromText.value);
						// utterance.lang = selectTag[0].value;
					} else {
						console.log(toText.value);
						utterance = new SpeechSynthesisUtterance(toText.value);
						// utterance.lang = selectTag[1].value;
					}
					speechSynthesis.speak(utterance);
				}
			});
		});
	}, []);

	return (
		<>
			<div className="flex items-center justify-center px-3 ">
				<div className="h-[700px] md:p-5 w-full  shadow-md my-5">
					<div className="rounded-md  h-[400px] p-5 flex md:flex-row flex-col ">
						<textarea
							className="from-text w-full h-[300px] outline-none   resize-none border md:rounded-l-lg p-3"
							spellCheck="false"
							placeholder="Enter Text"></textarea>
						<textarea
							className="to-text h-[300px] w-full outline-none  resize-none border  md:rounded-r-lg p-3 "
							spellCheck="false"
							readOnly
							re
							placeholder="Enter Text"></textarea>
					</div>
					<div className=" flex md:flex-row flex-col items-center justify-between px-5">
						<li className="row from flex items-center gap-5 text-xl">
							<div className="icons flex gap-5 text-gray-300">
								<i
									id="from"
									className="fas fa-volume-up cursor-pointer text-lg"></i>
								<i id="from" className="fas fa-copy cursor-pointer text-lg"></i>
							</div>
							<div>
								<select></select>
							</div>
						</li>

						<li className="exchange list-none">
							<i className="fas fa-exchange-alt exchange"></i>
						</li>
						<li className="row to flex items-center gap-3 text-xl">
							<div>
								<select></select>
							</div>
							<div className="icons flex gap-5 text-gray-300">
								<i
									id="to"
									className="fas fa-volume-up cursor-pointer text-lg"></i>
								<i id="to" className="fas fa-copy cursor-pointer text-lg"></i>
							</div>
						</li>
					</div>
					<div className="m-5">
						<button
							className="w-full bg-black text-white 
                     py-2 cursor-pointer text-sm md:text-2xl font-bold">
							Translate Text
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TranslationPage;
