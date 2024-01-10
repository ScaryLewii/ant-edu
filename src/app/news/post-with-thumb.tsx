import Image from "next/image"
import { type INews } from "../home/news/news.types"
import moment from "moment"
import Link from "next/link"

export default function PostWithThumbnail({data}: {
	data: INews
}) {
	return (
		<article className="flex flex-col gap-[18px]">
			<Image src={data.thumbnail} width={455} height={256} alt={data.title} />
			<div className="text-cyan">{moment(data.createdAt).format("DD/MM/YYYY")} | <span className="uppercase">{data.type}</span></div>
			<Link href={`/${data.id}`} className="text-[22px] uppercase font-semibold hover:text-cyan">{data.title}</Link>
			<p>{data.description}</p>

			<Link href={`/news/${data.id}`} className="italic font-semibold underline">Đọc tiếp</Link>
		</article>
		
	)
}