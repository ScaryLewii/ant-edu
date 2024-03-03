"use client"

import Link from "next/link";
import Background from "public/background/news.jpg";
import { useEffect, useState } from "react";
import Block from "../_components/layout/block";
import PostWithThumbnail from "../news/post-with-thumb";
import { type IDocument } from "./types";

export default function NewsPage() {
	const [data, setData] = useState<IDocument[]>([])

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "blog-categories/21/posts?Page=1&PageSize=5")
			const result = await data.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			const documents = JSON.parse(result).data.items as unknown as IDocument[] || []
			setData(documents)
		}

		getData().catch(error => console.log(error))
	}, [])
	
	return (
		<main className="flex flex-col items-center justify-center">
			<Block backgroundSrc={Background} backgroundArticle={true} className="bg-sea pb-[142px]">
			{data?.[0] && 
				<div className="container mx-auto max-w-[900px] mt-[30%] mb-[160px] text-center">
					<h1 className="text-center text-white text-[40px] font-bold">{data[0].title}</h1>
					<div className="mb-[57px]">{data[0].description}</div>
				</div>
			}

			<div className="container mx-auto grid lg:grid-cols-3 gap-[60px] justify-between items-center">
				{data?.map((document) => 
					<>
						{document.documents?.map((doc, index) => (
							<article key={index}>
								<h2>{doc.displayName}</h2>
								<Link
									href={doc.url}
									rel={'noreferrer'}
									className="bg-cyan text-[18px] font-bold px-[47px] py-[15px] inline-block mt-3">
									Download
								</Link>
							</article>
						))}
					</>
				)}
			</div>
		</Block>
		</main>
	)
}