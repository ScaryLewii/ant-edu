"use client";

import { useCallback } from "react";
import Block from "../_components/layout/block";
import homeHeroBackground from "public/background/main-bg.jpg";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const HomeBanner = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		//
	}, []);

	return (
		<Block backgroundSrc={homeHeroBackground} extraChildren={
			<Particles
			className="absolute top-0 bottom-0 right-0 left-0 z-0"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
					background: {
							color: {
									value: "transparent",
							},
					},
					fullScreen: { enable: false },
					fpsLimit: 30,
					interactivity: {
						events: {
								resize: true,
						},
						modes: {
								push: {
										quantity: 4,
								},
								repulse: {
										distance: 200,
										duration: 1,
								},
						},
					},
					particles: {
						color: {
								value: "#ffffff",
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
									default: "bounce",
							},
							random: false,
							speed: 0.5,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 1600,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
			}}
	/>
		}>
			<div className="container flex flex-col items-center justify-center gap-8 text-center mx-auto">
				<h1 className="text-[26px] max-w-[80%] xl:text-[65px] font-bold text-glow">Trung tâm Khảo thí Ant Edu</h1>
				<i className="xl:text-[26px] max-w-[90%]">Một nút nhấn cho ngàn mục tiêu</i>
			</div>
		</Block>
	)
}

export default HomeBanner