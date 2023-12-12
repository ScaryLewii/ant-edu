import { type Dispatch, type SetStateAction, useContext } from "react"
import { Line } from "~/app/_components/assets/icons"
import { StepContext } from "~/app/context/context"

const data = [
	{
		index: 1,
		label: "Tạo Account"
	},
	{
		index: 2,
		label: "Đăng ký"
	},
	{
		index: 3,
		label: "Luyện tập"
	},
	{
		index: 4,
		label: "Thi"
	},
	{
		index: 5,
		label: "Nhận kết quả"
	},
]

const StepIndex = ({step} : {step: number}) => {
	const stepContext = useContext(StepContext) as {
		setStep: Dispatch<SetStateAction<number>>,
	}

	const activeStep = (index: number) => {
		if (index < 3) return
		stepContext.setStep(index)
	}

	return (
		<div className="flex items-center justify-center gap-[20px]">
			{data.map((d, index) =>
				<>
				<div key={index} 
					onClick={() => activeStep(d.index)}
					className={`${step >= d.index && "text-cyan"} cursor-pointer inline-flex items-center gap-[12px] whitespace-nowrap`}>
					<span className={`${step >= d.index ? "bg-cyan" : "bg-[##C8C8C880]"} w-[33px] h-[33px] inline-flex justify-center items-center text-white rounded-full`}>{d.index}</span>
					{d.label}
				</div>
				{index !== data.length - 1 && <span><Line /></span>}
				</>


			)}
		</div>
	)
}

export default StepIndex