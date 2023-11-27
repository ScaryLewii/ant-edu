"use client"

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import InformImg from "public/static-images/informed.png"
import RegisteredImg from "public/static-images/registered.png"

export default function FacebookPage() {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0&appId=1039019366282747";
		script.defer = true
		script.async = true
		script.crossOrigin = "anonymous"
		script.nonce = "dCJE0cU3"
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script);
		}
	}, []);

	return (
		<div>
			<div id="fb-root"></div>
			<div className="fb-page" 
				data-href="https://www.facebook.com/antedu.vn"
				data-width="580" 
				data-hide-cover="false"
				data-show-facepile="false"></div>

			<div className="flex items-center gap-[60px] mt-[40px]">
				<Link href="">
					<Image src={RegisteredImg} alt="" width={147} height={45} />
				</Link>

				<Link href="">
					<Image src={InformImg} alt="" width={147} height={45} />
				</Link>
			</div>
		</div>
	);
}