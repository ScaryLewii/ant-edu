"use client"

import { useContext, type Dispatch, type SetStateAction } from "react"
import Input from "~/app/_components/form/input"
import { StepContext } from "~/app/context/context"
import StepIndex from "./step-index"

const SignUpStep = () => {
	const stepContext = useContext(StepContext) as {
		setStep: Dispatch<SetStateAction<number>>,
	}

	return (
		<>
		<h2 className="font-bold text-[40px] text-light">Đăng ký thi PTE</h2>

		<div className="mx-auto mt-[80px] max-w-[888px]">
			<StepIndex step={1} />
		</div>

		<div className="flex items-center justify-center gap-[100px] mt-[80px]">
			<Input label="Your Email" type="email" placeholder="Enter your email" />
			<Input label="Password" type="password" placeholder="Enter your password" />
		</div>

		<div className="flex justify-center mt-[70px]">
			<button className="bg-cyan hover:bg-opacity-80 px-[24px] py-[12px] rounded-[9px]"
				onClick={() => stepContext.setStep(2)}
			>
				Confirm
			</button>
		</div>
		</>
	)
}

export default SignUpStep