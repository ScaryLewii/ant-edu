"use client"

import { useState } from "react";
import { ChatIcon } from "../assets/icons";
import Link from "next/link";

export default function GuideBtn() {
	const [open, setOpen] = useState(false)

	return (
		<button className={`fill-white flex items-center gap-3 cursor-pointer`}
			onClick={() => setOpen(true)}
			onBlur={() => setOpen(false)}
		>
			<ChatIcon />
			{open && <Link href="/page-not-found">Hướng dẫn</Link>}
		</button>
	)
}