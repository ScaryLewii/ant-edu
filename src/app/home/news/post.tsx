import Link from "next/link";


export default function Post({data}: {data: Post}) {
	return (
		<article>
			<div className="text-cyan">{data.date} | <span className="uppercase">{data.category}</span></div>
			<Link href="#" className="text-[22px] uppercase font-semibold my-[18px] hover:text-cyan">{data.title}</Link>
			<p>{data.excerpt}</p>
		</article>
	)
}