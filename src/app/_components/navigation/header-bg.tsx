"use client"

import { useEffect, useState } from "react"

export default function HeaderBg() {
	const [isShow, setIsShow] = useState(false)

	useEffect(() => {
		if (!window) return;

		window.addEventListener('scroll', () => {
			if (window.scrollY >= 80) {
				setIsShow(true)
				return
			}

			setIsShow(false)
		})
	}, [])

	if (!isShow) {
		return <></>
	}

	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-sea bg-opacity-90"></div>
	)
}