"use client"

import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Block from '~/app/_components/layout/block';
import { type ISchedule } from '../schedule.types';

export default function Schedule() {
	const [data, setData] = useState<ISchedule[]>([])

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

	return (
		<Block>
			<div className="container flex justify-between h-full mx-auto">
				<div className="flex flex-col items-center justify-center w-[60%]">
					<div className='flex gap-[36px] items-end'>
						<div className="bg-white rounded-[25px] p-[45px] text-black">
							<Calendar 
								tileClassName={({ date }) => {
									if (data.find(x => moment(x.startAt).format("DD-MM-YYYY") === moment(date).format("DD-MM-YYYY") && x.examinationType === "Offline")){
										return 'offline'
									}

									if (data.find(x => moment(x.startAt).format("DD-MM-YYYY") === moment(date).format("DD-MM-YYYY") && x.examinationType === "Online")) {
										return 'online-green'
									}
								}} 
								onClickDay={(value) => {
									if (data.find(x => moment(x.startAt).format("DD-MM-YYYY") === moment(value).format("DD-MM-YYYY") && x.examinationType === "Offline")) {
										document.getElementById("PTE_register")?.scrollIntoView()
									}
								}}
							/>

							<div className="flex gap-[20px] items-center justify-center mt-[40px]">
								<div className="inline-flex items-center gap-[12px]">
									<span className="block w-[22px] h-[22px] rounded-full bg-green-500"></span>
									<span>Lịch Online</span>
								</div>

								<div className="inline-flex items-center gap-[12px]">
									<span className="block w-[22px] h-[22px] rounded-full bg-cyan"></span>
									<span>Lịch Offline</span>
								</div>

								<div className="inline-flex items-center gap-[12px]">
									<span className="block w-[22px] h-[22px] rounded-full bg-gray"></span>
									<span>Lịch thi kín</span>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-[55px]'>
					Bạn sẽ được trải nghiệm thi thử trên môi trường khảo thí thật 100% hoàn toàn miễn phí
					</div>
				</div>

				<div className="flex flex-col justify-center pr-[5%] text-box-2">
					<i className="font-svn text-[32px]">Thông tin về</i>
					<h2 className="font-bold text-[40px] text-[#FEE7B5]">
						Lịch thi PTE
					</h2>
				</div>
			</div>
		</Block>
	);
}