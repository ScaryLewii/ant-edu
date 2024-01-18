"use client"

import { useRef } from "react";
import Overview from "./overview";
import Pricing from "./pricing";

import { type ISchedule } from "../schedule.types";

export interface ICert {
	title: string,
	schedule: ISchedule[]
}

export default function Certificate() {
	const elementRef = useRef(null)

	return (
		<main ref={elementRef}>
			<Overview />
			
			<div className="relative overflow-hidden">
				<div className="parallax">
					<Pricing />
				</div>

				{/* <Guidance /> */}

				{/* <Practice /> */}

				{/* <div className="bg-[#001730] bg-opacity-40 absolute bottom-0 h-full blue-box z-10"></div> */}
			</div>
		</main>
	);
}