"use client"

import Calendar from 'react-calendar';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { type ISchedule } from '../schedule.types';
import Block from '~/app/_components/layout/block';

export default function Schedule() {
	const [data, setData] = useState<ISchedule[]>([])

	useEffect(() => {
		const getSchedule = async () => {
			const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "examinations/incoming")
			const result = await data.text()

			const schedule = JSON.parse(result).data as ISchedule[]
			setData(schedule.filter(s => s.certificateType === "CEFR"))
		}

		getSchedule()
	}, [])
	
	return (
		<Block>
			<div className="container flex justify-between h-full">
				<div className="flex flex-col items-center justify-center w-[60%]">
					<div className='flex gap-[36px] items-end'>
						<div className="bg-white rounded-[25px] p-[45px] text-black">
							<Calendar 
								tileClassName={({ date, view }) => {
									// if (data.find(x => moment(x.startAt).format("DD-MM-YYYY") === moment(date).format("DD-MM-YYYY") && x. === 'full')){
									// 	return 'full'
									// }

									if (data.find(x => moment(x.startAt).format("DD-MM-YYYY") === moment(date).format("DD-MM-YYYY"))) {
										return 'offline'
									}
								}} 
							/>

							<div className="flex gap-[20px] items-center justify-center mt-[40px]">
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
					Thời gian cấp chứng chỉ <br />
					<i>* Sau khi hoàn thành kỳ thi, thí sinh sẽ nhận được kết quả và chứng chỉ PTE qua email sau <strong>khoảng 5-7 ngày</strong> làm việc.</i>
					</div>
				</div>

				<div className="flex flex-col justify-center pr-[5%] text-box-2">
					<i className="font-svn text-[32px]">Thông tin về</i>
					<h2 className="font-bold text-[40px] text-[#FEE7B5]">
						Lịch thi CEFR
					</h2>
				</div>
			</div>
		</Block>
	);
}