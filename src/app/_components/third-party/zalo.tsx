"use client"
import { useEffect } from "react"

const Zalo = () => {
	const script = `<script src="https://sp.zalo.me/plugins/sdk.js"></script>`
	const htmlElement = `
		<div class="zalo-chat-widget" data-oaid="302896296492583331" data-welcome-message="Nhắn tin nhận ưu đãi" data-autopopup="0" data-width="" data-height=""></div>
	`
	useEffect(() => {
		if (window !== undefined) {

		}
	}, [])
	return <div dangerouslySetInnerHTML={{__html: htmlElement + script}}></div>
}

export default Zalo