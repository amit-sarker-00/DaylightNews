import React, { useEffect, useState } from "react";
import HomePageSnipper from "./HomePageSnipper";
import HomePageStoryAllCard from "./HomePageStoryAllCard";

const HomePageStoryTravel = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}stories`)
			.then(res => res.json())
			.then(result => {
				const breakingNews = result?.filter(
					breaking => breaking?.stories === "travelStory"
				);
				setData(breakingNews);
			});
	}, []);
	// console.log(datas)
	return (
		<>
			{data?.length === 0 && <HomePageSnipper />}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
				{data?.map(data => (
					<HomePageStoryAllCard data={data} key={data} />
				))}
			</div>
		</>
	);
};

export default HomePageStoryTravel;
