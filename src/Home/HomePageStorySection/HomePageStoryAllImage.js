import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import HomePageSnipper from "./HomePageSnipper";

const HomePageStoryAllImage = () => {
	const params = useParams();

	const { data: stories, refetch } = useQuery({
		queryKey: ["stories", params?.id],
		queryFn: () =>
			fetch(`${process.env.REACT_APP_API_URL}stories/${params?.id}`).then(res =>
				res.json()
			),
	});
	

	return (
		<div className="storyBg w-full h-screen bg-black flex items-center justify-center">
			<div className="w-[600px] h-[800px] mx-5  my-auto">
				<Splide
					aria-label=""
					options={{
						autoplay: true,
						height: "100%",
						breakpoints: {
							1500: {
								height: "100%",
							},
							1024: {
								height: "100%",
							},
						},
						rewind: true,
						arrows: true,
						pagination: true,
					}}>
					{stories?.pictureCollection.length === 0 && <HomePageSnipper />}
					{stories?.pictureCollection?.map(banner => (
						<SplideSlide className="relative" key={banner._id}>
							<div className="relative overflow-hidden story rounded-2xl">
								<img
									className="h-[800px] w-full object-cover rounded-2xl"
									src={banner?.pictureOne}
									alt=""
								/>
								<div className="absolute z-50 bottom-0  h-36 w-full px-2 text-white">
									<h1 className="text-white text-2xl  font-bold py-3">
										{banner?.title}
									</h1>
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide>
			</div>
		</div>
	);
};

export default HomePageStoryAllImage;
