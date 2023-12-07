import Link from "next/link";


export default function Post({data}: {data: Post}) {
	return (
		<article className="flex flex-col gap-4">
			<div className="text-cyan">{data.date} | <span className="uppercase">{data.category}</span></div>
			<Link href="#" className="text-[22px] uppercase font-semibold hover:text-cyan">{data.title}</Link>
			<p>{data.excerpt}</p>
		</article>
	)
}