"use client"

import Background from "public/background/cert-bg-3.jpg";
import { useState } from "react";
import Block from "~/app/_components/layout/block";
import { StepContext } from "~/app/context/context";
import FinalStep from "./steps/step-final";
import GuideStep from "./steps/step-guide";
import InfoStep from "./steps/step-info";
import SignUpStep from "./steps/step-signup";

export default function Guidance() {
	const [step, setStep] = useState(0)

	return (
		<Block backgroundSrc={Background} id="PTE_register">
			<StepContext.Provider value={{step, setStep}}>
				<div className="container flex flex-col justify-center items-center z-20 h-full mx-auto">
					{step === 0 && <GuideStep />}
					{step === 1 && <SignUpStep />}
					{step === 2 && <InfoStep />}
					{step === 3 && <FinalStep />}
				</div>
			</StepContext.Provider>
		</Block>
	);
}