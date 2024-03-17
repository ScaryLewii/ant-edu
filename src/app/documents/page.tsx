"use client"

import Link from "next/link";
import Background from "public/background/news.jpg";
import { useEffect, useState } from "react";
import Block from "../_components/layout/block";
import { type IDocument } from "./types";
import moment from "moment";
import Image from "next/image";

export default function NewsPage() {
	const [data, setData] = useState<IDocument[]>([])

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "blog-categories/21/posts?Page=1&PageSize=5")
			const result = await data.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			const documents = JSON.parse(result).data.items as unknown as IDocument[] || []
			setData(documents)
			console.log(documents)
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
							<article className="flex flex-col gap-[18px]" key={index}>
								<Image src={document.thumbnail} width={455} height={256} alt={doc.displayName} unoptimized />
								<div className="text-cyan">{moment(document.createdAt).format("DD/MM/YYYY")} | <span className="uppercase">{document.keywords}</span></div>
								<h2 className="text-[22px] uppercase font-semibold hover:text-cyan">{doc.displayName}</h2>
								<p>{document.description}</p>

								<Link href={doc.url} className="italic font-semibold underline" target="_blank">Download</Link>
							</article>
						))}
					</>
				)}
			</div>
		</Block>
		</main>
	)
}