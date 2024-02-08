import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import VN from "public/static-images/VN.png";
import { api } from "~/trpc/server";
import { ArrowDown } from "../assets/icons";
import GuideBtn from "./guide-btn";
import HeaderBg from "./header-bg";
import NavItem from "./nav-item";
import NavMobile from "./nav-mobile";
import SearchInput from "./search-input";
import LangSwithcer from "./language-switcher";

export default async function MainNav() {
	const navItems = await api.navItems.getAll.query()

	return <>
	<header className="hidden xl:flex justify-between items-center px-[45px] py-[12px] fixed top-0 left-0 w-full z-50 ">
		<HeaderBg />
		<div className="flex items-center gap-[40px] relative z-[2]">
			<Link href="/" className="flex gap-2">
				<Image src={Logo} alt="ant edu" width={55} height={54} className="object-contain w-[55px] h[54px]" />
				<div className="flex flex-col gap-[2px] hover:text-glow">
					<b className="">AI BOOSTED ENGLISH</b>
					<i>One Click for Everything</i>
				</div>
			</Link>

			<nav className="flex items-center gap-[30px]">
				<ul className="flex
				font-semibold text-[13px]">
					{navItems.map(item => 
						<NavItem key={item.id} item={item} />
					)}
				</ul>
			</nav>
		</div>

		<div className="flex items-center gap-5 relative z-[2]">
			<SearchInput />

			<GuideBtn />

			<Link href="" className="bg-cyan px-[7px] py-[12px] rounded-[9px] hover:bg-opacity-80">Đăng nhập</Link>
		
			<LangSwithcer />
		</div>
	</header>
	

	<NavMobile navItems={navItems} />
	</>
}