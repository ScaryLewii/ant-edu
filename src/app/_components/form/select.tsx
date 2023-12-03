export interface IOption {
	value: string,
	label: string
}

const Dropdown = ({label, placeholder, options }: {label: string, placeholder: string, options: IOption[]}) => {
	return <>
		<label className="flex flex-col gap-[20px]">
			<span className="font-bold">{label}</span>
			<select className="rounded-[8px] border border-white border-opacity-80 bg-transparent py-[11px] px-[20px] w-[300px]">
				<option className="text-black" value="">{placeholder}</option>
				{options.map((option, index) =>
					<option className="text-black" key={index} value={option.value}>{option.label}</option>
				)}
			</select>
		</label>
	</>
}

export default Dropdown