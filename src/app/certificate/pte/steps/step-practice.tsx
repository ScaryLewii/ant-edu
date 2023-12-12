"use client"

import { useContext, type Dispatch, type SetStateAction } from "react"
import { StepContext } from "~/app/context/context"
import StepIndex from "./step-index"

const PracticeStep = () => {
	const stepContext = useContext(StepContext) as {
		setStep: Dispatch<SetStateAction<number>>,
	}

	return (
		<>
		<h2 className="font-bold text-[40px] text-light">Đăng ký thi IELTS</h2>

		<div className="mx-auto mt-[80px] max-w-[888px]">
			<StepIndex step={3} />
		</div>

		<div className="mx-auto mt-[80px] text-center">
			Chúc mừng bạn đã hoàn thiện thủ tục đăng ký thi chứng chỉ IELTS. <br/>
			Chúng tôi sẽ cùng bạn luyện tập chăm chỉ để đạt kết quả cao.  
			<br/><br/>
			Nào chúng ta cùng bắt đầu
		</div>

		<div className="flex justify-center mt-[70px]">
			<button className="bg-cyan hover:bg-opacity-80 px-[24px] py-[12px] rounded-[9px]"
				onClick={() => stepContext.setStep(5)}
			>
				Luyện tập
			</button>
		</div>
		</>
	)
}

export default PracticeStep