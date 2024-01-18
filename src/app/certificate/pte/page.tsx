"use client"

import { useRef } from "react";
import Overview from "./overview";
import Pricing from "./pricing";

import { type ISchedule } from "../schedule.types";
import Guidance from "./guidance";
import Practice from "./practice";
import Schedule from "./schedule";

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

					<Schedule />
				</div>

				<Guidance />

				<Practice />
			</div>
		</main>
	);
}