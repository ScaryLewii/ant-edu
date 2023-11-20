import Link from "next/link";
import { api } from "~/trpc/server";

export default async function MainNav() {
	const navItems = await api.navItems.getAll.query()

	return <header className="flex justify-between items-center px-[45px] py-[12px]">
		<nav className="flex items-center gap-[30px]">
			<Link href="/">
				logo
			</Link>

			<ul className="flex
			font-semibold text-[13px]">
				{navItems.map(item => 
					<li key={item.id}>
						<Link className="p-[10px]" href={`/${item.slug}`}>{item.name}</Link>
					</li>
				)}
			</ul>
		</nav>

		<div></div>
	</header>
}