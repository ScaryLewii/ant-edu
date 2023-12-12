"use client"

const data = [
	{
		stt: 1,
		content: "Pre A1 Starters (YLE Starters)",
		pricing: "902.000 VNĐ"
	},
	{
		stt: 2,
		content: "A1 Movers (YLE Movers)",
		pricing: " 968.000 VNĐ"
	},
	{
		stt: 3,
		content: "A2 Flyers (YLE Flyers)",
		pricing: "1.034.000 VNĐ"
	},
	{
		stt: 4,
		content: "B1 Preliminary (PET)/ Preliminary for Schools (PETfS",
		pricing: " 1.265.000 VNĐ"
	},
	{
		stt: 5,
		content: "A2 Key (KET)/ Key for Schools (KETfS)",
		pricing: " 1.287.000 VNĐ"
	}
]

export default function Pricing() {
	return (
		<section className="flex h-screen overflow-hidden flex-col items-center justify-center relative pricing z-20">
			<div className="container flex justify-between h-full">
				<div className="flex flex-col justify-center text-box-1">
					<i className="font-svn text-[32px]">Thông tin về</i>
					<h2 className="font-bold text-[40px] text-[#FEE7B5]">
						Lệ phí và những <br/>
						khoản phí khác
					</h2>
				</div>

				<div className="flex items-center">
					<table>
						<thead className="bg-light text-black">
							<tr>
								<th className="border border-white py-6 px-8">STT</th>
								<th className="border border-white py-6 px-8">Loại phí</th>
								<th className="border border-white py-6 px-8">Mức phí</th>
							</tr>
						</thead>
						<tbody>
							{data.map((d, index) =>
								<tr key={index}>
									<td className="border border-white py-6 px-6 text-center">{d.stt}</td>
									<td className="border border-white py-6 px-8"><div dangerouslySetInnerHTML={{__html: d.content}}></div></td>
									<td className="border border-white py-6 px-8">{d.pricing}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}