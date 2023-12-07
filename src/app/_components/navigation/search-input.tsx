"use client"

import { useState } from "react";
import { SearchIcon } from "../assets/icons";

export default function SearchInput() {
	const [open, setOpen] = useState(false)

	return (
		<label className={`fill-white flex items-center gap-3 py-[10px] rounded-[8px] cursor-pointer ${open && 'border border-white px-[14px]'}`}
			onClick={() => setOpen(true)}
			onBlur={() => setOpen(false)}
		>
			<SearchIcon />
			<input type="text" placeholder="Tìm kiếm..." className={`border-0 bg-transparent outline-none ${open ? 'w-full' : 'w-0'}`} />
		</label>
	)
}