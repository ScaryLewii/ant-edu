import Link from "next/link";
import { api } from "~/trpc/server";
import Logo from "public/logo.png"
import Image from "next/image";
import { SearchIcon } from "./assets/icons";

export default async function MainNav() {
	const navItems = await api.navItems.getAll.query()

	return <header className="flex justify-between items-center px-[45px] py-[12px] fixed top-0 left-0 w-full z-50">
		<Link href="/" className="flex gap-2">
			<Image src={Logo} alt="ant edu" width={55} height={55} />
			<div className="flex flex-col gap-[2px]">
				<b className="">AI BOOSTED ENGLISH</b>
				<i>One Click for Everything</i>
			</div>
		</Link>

		<nav className="flex items-center gap-[30px]">
			<ul className="flex
			font-semibold text-[13px]">
				{navItems.map(item => 
					<li key={item.id} className="relative group">
						<Link className="px-[15px] py-[7px] rounded-[20px] group-hover:bg-white group-hover:text-black flex" href={`/${item.slug}`}>{item.name}</Link>
						{item.children &&
							<div className="p-[22px] absolute top-full -left-[70%] hidden group-hover:block">
								<ul className="flex flex-col gap-[16px] p-[30px]
									backdrop-blur-md bg-[#00313D] bg-opacity-[0.05]
									rounded-[20px] border border-[#00313D] border-opacity-[0.01]
									shadow-[0px 4px 40px 0px] shadow-[rgba(0, 0, 0, 0.10)]
								">
								{item.children.map(child => 
									<li key={child.id} className="flex">
										<Link className="p-[10px] text-center w-full min-w-[260px] border border-white rounded-[20px] hover:bg-white hover:text-black whitespace-nowrap" href={`/${child.slug}`}>{child.name}</Link>
									</li>
								)}
							</ul>
							</div>
						}
					</li>
				)}
			</ul>
		</nav>

		<div className="flex items-center gap-5">
			<button className="fill-white hover:fill-cyan">
				<SearchIcon />
			</button>

			<Link href="" className="bg-cyan px-[7px] py-[12px] rounded-[9px] hover:bg-opacity-80">Đăng nhập</Link>
		</div>
	</header>
}