"use client"

import Image from "next/image";
import Background from "public/background/cert-bg-3.jpg";
import { useState } from "react";
import { StepContext } from "~/app/context/context";
import GuideStep from "./steps/step-guide";
import SignUpStep from "./steps/step-signup";
import InfoStep from "./steps/step-info";
import PracticeStep from "./steps/step-practice";
import FinalStep from "./steps/step-final";

export default function Guidance() {
	const [step, setStep] = useState(0)

	return (
		<section className="flex flex-col items-center justify-center guidance relative">
			<Image src={Background} width={1920} height={1080} alt="home background"
				className="absolute top-0 left-0 w-full h-full object-cover" />

			<StepContext.Provider value={{step, setStep}}>
				<div className="container flex flex-col justify-center items-center z-20 h-full w-">
					{step === 0 && <GuideStep />}
					{step === 1 && <SignUpStep />}
					{step === 2 && <InfoStep />}
					{step === 3 && <FinalStep />}
				</div>
			</StepContext.Provider>
		</section>
	);
}