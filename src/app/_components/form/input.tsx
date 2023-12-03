const Input = ({label, type, placeholder}: {label: string, type: string, placeholder: string}) => {
	return <>
		<label className="flex flex-col gap-[20px]">
			<span className="font-bold">{label}</span>
			<input className="rounded-[8px] border border-white border-opacity-80 bg-transparent py-[11px] px-[20px] w-[300px]" type={type} placeholder={placeholder} />
		</label>
	</>
}

export default Input