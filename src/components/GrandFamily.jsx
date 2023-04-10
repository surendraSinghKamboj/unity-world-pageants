import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { partners_carosel } from "../assets/index";

SwiperCore.use([Pagination]);

const GrandFamily = () => {
	return (
		<>
			<div className="w-full text-center">
				<h3 className="uppercase text-3xl">Our parteners</h3>
			</div>
			<Swiper className="swiper-container" rewind={true}>
				<div className="swiper-wrapper">
					{partners_carosel &&
						partners_carosel.map((item, index) => (
							<SwiperSlide key={index}>
								<Image alt="" src={item} />
							</SwiperSlide>
						))}
				</div>
			</Swiper>
		</>
	);
};

export default GrandFamily;
