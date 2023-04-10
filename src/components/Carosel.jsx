import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import carosel from "../assets/index";
import Image from "next/image";

export default function App() {
	return (
		<section className="carousel">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				rewind={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper mt-3 mb-3"
			>
				{carosel &&
					carosel.map((item, index) => {
						return (
							<SwiperSlide
								key={index}
								className="swiper-slide rounded-2xl mt-4 mb-4"
							>
								<Image alt="carousel" className="p-5" src={item} />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</section>
	);
}
