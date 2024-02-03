"use client"

import { type Dispatch, type SetStateAction, useContext, useState, useEffect } from "react"
import { StepContext } from "~/app/context/context"
import StepIndex from "./step-index"
import Input from "~/app/_components/form/input"
import Dropdown, { type IOption } from "~/app/_components/form/select"
import Link from "next/link"
import { type ISchedule } from "../../schedule.types"
import moment from "moment"

const InfoStep = () => {
	const stepContext = useContext(StepContext) as {
		setStep: Dispatch<SetStateAction<number>>,
	}

	const [registered, setRegistered] = useState(false)
	const [data, setData] = useState<ISchedule[]>([])
	const [schedule, setSchedule] = useState<IOption[]>([])

	useEffect(() => {
		const getSchedule = async () => {
			const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "examinations?Page=1&PageSize=100")
			const result = await data.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			const schedule = JSON.parse(result).data.items as ISchedule[]
			setData(schedule.filter(s => s.certificateType === "PTE"))
		}

		getSchedule().catch(error => console.log(error))
	}, [])

	useEffect(() => {
		const s: IOption[] = []
		data.forEach(x =>
			s.push({value: moment(x.startAt).format("DD-MM-YYYY"), label: moment(x.startAt).format("DD-MM-YYYY")})
		)

		setSchedule(s)
	}, [data])

	return (
		<>
		<h2 className="font-bold text-[40px] text-light">Đăng ký thi PTE</h2>

		<div className="mx-auto mt-[80px] max-w-[888px]">
			<StepIndex step={2} />
		</div>

		{!registered &&
			<div className="grid mx-auto grid-cols-2 gap-x-[100px] gap-y-[30px] mt-[80px]">
				<Dropdown label="Who are you booking the test for?" placeholder="Choose one option" options={[
					{value: 'self', label: 'My Self'},
					{value: 'others', label: 'Others'},
				]} />

				<Dropdown label="Sex" placeholder="Choose one option" options={[
					{value: 'male', label: 'Male'},
					{value: 'female', label: 'Female'},
					{value: 'other', label: 'Other'},
				]} />

				<Input label="Họ và Tên / Full name" type="text" placeholder="Enter here" />
				<Input label="Country / territory of residence" type="text" placeholder="Vietnam" />
				<Input label="Your contact details" type="text" placeholder="Enter here" />
				<Input label="Date of birth" type="date" placeholder="dd / mm / yyyy" />
				<Dropdown label="Thời gian thi thử" placeholder="Choose one option"
					options={schedule}
				/>
				<Input label="Mục tiêu điểm đầu ra" type="text" placeholder="Enter here" />
			</div>
		}

		{registered &&
			<div className="mx-auto mt-[80px] text-center">
				Bạn đã đăng ký thành công thi thử chứng chỉ PTE, vui lòng <strong className="text-cyan">check email</strong> <br/>
				để kiểm tra và xác nhận.
			</div>
		}

		<div className="flex justify-center gap-[20px] mt-[70px]">
			{!registered &&
				<button className="bg-cyan hover:bg-opacity-80 px-[24px] py-[12px] rounded-[9px]"
					onClick={() => setRegistered(true)}
				>
					Confirm
				</button>
			}

			{registered &&
				<>
					<Link href="/" className="bg-none hover:bg-cyan px-[24px] py-[12px] rounded-[9px] border border-cyan">
						Trở lại trang chủ
					</Link>

					<button className="bg-cyan hover:bg-opacity-80 px-[24px] py-[12px] rounded-[9px]"
						onClick={() => stepContext.setStep(3)}
					>
						Tiếp theo
					</button>
				</>
			}
		</div>
		</>
	)
}

export default InfoStep