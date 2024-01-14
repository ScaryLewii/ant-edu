"use client"
import { usePathname } from "next/navigation";
import Background from "public/background/news.jpg";
import { useEffect, useState } from "react";
import Block from "~/app/_components/layout/block";
import { type INews } from "~/app/home/news/news.types";
import PostWithThumbnail from "~/app/news/post-with-thumb";

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

export default function News() {
	const pathname = usePathname()
	const postId = pathname.split("/").pop()

	const [data, setData] = useState<PostData>()
	const [postsRelated, setPostsRelated] = useState<INews[]>([])

	useEffect(() => {
		const getPostData = async () => {
			const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "posts/" + postId)
			const result = await request.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			setData(JSON.parse(result).data as unknown as PostData)
		}

		const getRelatedPosts = async () => {
			const request = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "blog-categories/18/posts?Page=1&PageSize=5")
			const result = await request.text()

			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			setPostsRelated(JSON.parse(result).data.items as unknown as INews[])
		}

		getPostData().catch(error => console.error(error))
		getRelatedPosts().catch(error => console.error(error))
	}, [postId])

	if (!postId) {
		return <></>
	}

	return (
		<Block backgroundSrc={Background} backgroundArticle={true} className="bg-sea pb-[142px]">
			{data && 
				<article className="container mx-auto max-w-[1040px] mt-[30%]">
					<h1 className="text-center text-cyan text-[40px] font-bold">{data.title}</h1>
					<span className="mx-auto block text-center">{data.createdAt}</span>

					<div className="text-justify mt-[140px] flex flex-col" dangerouslySetInnerHTML={{__html: data.content}}>
					</div>
				</article>
			}

			<div className="container mx-auto mt-[100px] mb-[80px] relative text-center">
				<span className="absolute top-1/2 left-0 -translate-y-1/2 h-[1px] w-full bg-white"></span>
				<h3 className="text-center text-[48px] font-bold inline-block bg-sea relative z-10 px-10">Có thể bạn muốn đọc tiếp?</h3>
			</div>

			<div className="container mx-auto grid lg:grid-cols-3 gap-[60px] justify-between items-center">
				{postsRelated?.filter(post => post.id !== +postId).map((post, index) => (
					<PostWithThumbnail key={index} data={post} />
				))}
			</div>
		</Block>
	);
}

