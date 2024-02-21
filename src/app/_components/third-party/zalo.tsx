"use client"
import { useEffect } from "react"

const Zalo = () => {
	const script = `<script src="https://sp.zalo.me/plugins/sdk.js"></script>`
	const htmlElement = `<script src="https://sp.zalo.me/plugins/sdk.js"></script>`
	useEffect(() => {
		if (window !== undefined) {

		}
	}, [])
	return <div dangerouslySetInnerHTML={{__html: htmlElement + script}}></div>
}

export default Zalo