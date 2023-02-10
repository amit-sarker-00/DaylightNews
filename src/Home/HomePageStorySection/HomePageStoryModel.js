import React, { useEffect, useState } from "react";
import HomePageSnipper from "./HomePageSnipper";
import HomePageStoryAllCard from "./HomePageStoryAllCard";

const HomePageStoryModel = () =>
{
	const [ datas, setDatas ] = useState([]);

	useEffect(() =>
	{
		fetch(`${ process.env.REACT_APP_API_URL }stories`)
			.then(res => res.json())
			.then(result =>
			{
				const breakingNews = result?.filter(
					breaking => breaking?.stories === "modelStory"
				);
				setDatas(breakingNews);
			});
	}, []);

	return (
		<>
			{datas?.length === 0 && <HomePageSnipper />}

			<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
				{datas?.map(data => (
					<HomePageStoryAllCard data={data} key={data._id} />
				))}
			</div>
		</>
	);
};

export default HomePageStoryModel;
