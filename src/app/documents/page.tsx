"use client"

import moment from "moment";
import Link from "next/link";
import Background from "public/background/news.jpg";
import { useEffect, useState } from "react";
import Block from "../_components/layout/block";
import { type INews } from "../home/news/news.types";
import PostWithThumbnail from "../news/post-with-thumb";

export default function NewsPage() {
	const [data, setData] = useState<INews[]>([])

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "blog-categories/21/posts?Page=1&PageSize=5")
			const result = await data.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			const news = JSON.parse(result).data.items as unknown as INews[] || []
			setData(news)
		}

		getData().catch(error => console.log(error))
	}, [])
	
	return (
		<main className="flex flex-col items-center justify-center">
			<Block backgroundSrc={Background} backgroundArticle={true} className="bg-sea pb-[142px]">
			{data?.[0] && 
				<article className="container mx-auto max-w-[900px] mt-[30%] mb-[160px] text-center">
					<Link href={'news/' + data[0].id}>
						<h2 className="text-center text-white text-[40px] font-bold">{data[0].title}</h2>
					</Link>
					<div className="text-white my-[18px]">{moment(data[0].createdAt).format("DD/MM/YYYY")} | <span className="uppercase">{data[0].type}</span></div>

					<div className="mb-[57px]">{data[0].description}</div>

					<Link href={'news/' + data[0].id} className="bg-cyan text-[18px] font-bold px-[47px] py-[15px]">Đọc tiếp</Link>
				</article>
			}

			<div className="container mx-auto grid lg:grid-cols-3 gap-[60px] justify-between items-center">
				{data?.map((post, index) => 
					index !== 0 && <PostWithThumbnail key={index} data={post} />
				)}
			</div>
		</Block>
		</main>
	)
}