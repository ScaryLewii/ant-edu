"use client"
import { error } from "console";
import { usePathname } from "next/navigation";
import Background from "public/background/news.jpg";
import { useEffect, useState } from "react";
import Block from "~/app/_components/layout/block";

type PostData = {
	id: number;
	title: string;
	description: string;
	author: string;
	categoryId: number;
	keywords: string;
	views: number;
	content: string;
	age?: number;
	active: boolean;
	thumbnail: string;
	createdAt: string;
	updatedAt: string;
	createdBy?: string;
	updatedBy: number;
	type: string;
}

const data = {
	title: "10 ngày trước kì thi PTE - Những lưu ý trước ngày thi bạn cần biết",
	sticky: true,
	date: "August 13, 2023",
	category: "TIPS",
	excerpt: `
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	`
}

export default function News() {
	const pathname = usePathname()
	const postId = pathname.split("/").pop()

	const [data, setData] = useState<PostData>()

	useEffect(() => {
		const getPostData = async () => {
			const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "posts/" + postId)
			const result = await request.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			setData(JSON.parse(result).data as unknown as PostData)
		}

		getPostData().catch(error => console.error(error))
	}, [postId])

	return (
		<Block backgroundSrc={Background} backgroundArticle={true} className="bg-sea">
			{data && 
				<article className="container mx-auto max-w-[1040px] mt-[30%] mb-[120px]">
					<h1 className="text-center text-cyan text-[40px] font-bold">{data.title}</h1>
					<span className="mx-auto block text-center">{data.createdAt}</span>

					<div className="text-justify mt-[140px] flex flex-col gap-[40px]" dangerouslySetInnerHTML={{__html: data.content}}>
					</div>
				</article>
			}
		</Block>
	);
}

