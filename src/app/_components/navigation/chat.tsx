"use client"

import Image from "next/image";
import zalo from "public/static-images/zalo.png";
import chat from "public/static-images/chat.png";
import messenger from "public/static-images/messenger.png";
import { useState } from "react";
import Link from "next/link";

export default function Chat () {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="fixed cursor-pointer bottom-5 right-5 z-50">
			<button onClick={() => setIsExpanded(!isExpanded)}>
				<Image src={chat} width={48} height={48} alt="language" />
			</button>

			{isExpanded &&
				<div className="flex flex-col items-center w-full
					absolute bottom-[110%] left-0"
					onClick={() => setIsExpanded(false)}
				>
					<Link href="http://zalo.me/0922985555" target="_blank"
						className="w-full flex justify-center"
					>
						<Image src={zalo} width={60} height={60} alt="zalo" />
					</Link>

					<Link href="https://www.facebook.com/PTE.Booster/" target="_blank"
						className="w-full flex justify-center"
					>
						<Image src={messenger} width={40} height={40} alt="messenger" />
					</Link>
				</div>
			}
		</div>
	)
}