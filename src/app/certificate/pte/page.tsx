"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Overview from "./overview";
import Pricing from "./pricing";

import Guidance from "./guidance";
import Practice from "./practice";
import Schedule from "./schedule";

export interface ISchedule {
	date: string,
	state: 'full' | 'online' | 'offline',
	location: string[]
}

export interface ICert {
	title: string,
	schedule: ISchedule[]
}

const data: ICert[] = [
	{
		title: "ielts",
		schedule: [
			{
			date: '08-11-2023',
			state: 'full',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng']
			},
			{
			date: '09-11-2023',
			state: 'full',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng']
			},
			{
			date: '16-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng']
			},
			{
			date: '22-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng']
			},
			{
			date: '29-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng']
			}
		]
		},
		{
		title: "pte",
		schedule: [
			{
			date: '08-11-2023',
			state: 'full',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '09-11-2023',
			state: 'full',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '15-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '16-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '22-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '23-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '29-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '30-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			}
		]
		},
		{
		title: "cefr",
		schedule: [
			{
			date: '08-11-2023',
			state: 'full',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '09-11-2023',
			state: 'full',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '15-11-2023',
			state: 'online',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '16-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '22-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '23-11-2023',
			state: 'online',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '29-11-2023',
			state: 'offline',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			},
			{
			date: '30-11-2023',
			state: 'online',
			location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
			}
		]
	}
]

export default function Certificate() {
	const elementRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const element = elementRef.current as unknown as HTMLElement
		if (!element) return
		const tl = gsap.timeline({yoyo: true})
		const blueBox = element.querySelector(".blue-box")
		tl.fromTo(
			blueBox,
			{
				width: '100%',
				right: 0,
			},
			{
				width: '65%',
				right: 0,
				scrollTrigger: {
					// markers: true,
					trigger: element.querySelector(".overview"),
					start: "top",
					endTrigger: element.querySelector(".pricing"),
					end: "top",
					scrub: true,
				},
			}
		).fromTo(
			blueBox,
			{
				width: '65%',
				right: 0,
			},
			{
				right: undefined,
				left: 0,
				scrollTrigger: {
					// markers: true,
					trigger: element.querySelector(".pricing"),
					start: "center",
					endTrigger: element.querySelector(".schedule"),
					end: "top",
					scrub: true,
				},
			}
		).fromTo(
			blueBox,
			{
				width: '65%',
				height: '100%',
			},
			{
				right: 0,
				left: 0,
				width: '100%',
				height: '100%',
				scrollTrigger: {
					// markers: true,
					trigger: element.querySelector(".schedule"),
					start: "center",
					endTrigger: element.querySelector(".guidance"),
					end: "top",
					scrub: true,
				},
			}
		).fromTo(
			blueBox,
			{
				height: '100%',
			},
			{
				height: '650px',
				scrollTrigger: {
					// markers: true,
					trigger: element.querySelector(".guidance"),
					start: "center",
					endTrigger: element.querySelector(".practice"),
					end: "top",
					scrub: true,
				},
			}
		)
	})

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

				<div className="bg-[#001730] bg-opacity-40 absolute bottom-0 h-full blue-box z-10"></div>
			</div>
		</main>
	);
}