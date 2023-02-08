import { useQuery } from "@tanstack/react-query";
import React from "react";
import HomePageSnipper from "../HomePageStorySection/HomePageSnipper";
import LetestNewsCard from "./LetestNewsCard";

const Health = () => {
	const { data: healths, isLoading } = useQuery({
		queryKey: ["letestNews"],
		queryFn: () =>
			fetch(
				`${process.env.REACT_APP_API_URL}letestNews?letest=${"health"}`
			).then(res => res.json()),
	});

	return (
		<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-5">
			{isLoading && <HomePageSnipper />}

			{healths?.slice(-8)?.map(health => (
				<LetestNewsCard key={health?._id} news={health} />
			))}
		</section>
	);
};

export default Health;
