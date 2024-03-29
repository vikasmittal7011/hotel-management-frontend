const TextArea = ({ name, placeholder, id, onClick, type, required = true, value }) => {

    const onChange = (e) => {
        onClick(id, e.target.value)
    }

    return (
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
                <label htmlFor={name} className="block text-xl font-medium leading-6 text-gray-900 pb-1">{name}</label>
                <div className="mt-2">
                    <textarea type={type} placeholder={placeholder} name={name} id={id} autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:mx-5" onChange={onChange} required={required} value={value} rows={3} />
                </div>
            </div>
        </div>
    )
}

export default TextArea
