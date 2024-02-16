const CheckBox = ({ options, id, name, handleChnage, checkedValues }) => {

    const handleClick = (e) => {
        handleChnage(e.target)
    }

    return (
        <div className="mt-2 space-y-2">
            <fieldset>
                <legend className="font-medium text-gray-900 text-2xl">{name}</legend>
                <div className="mt-2 space-y-2 flex gap-10 flex-wrap">
                    {options?.map((option, i) => (
                        <div key={i} className="flex gap-x-3 pt-1 m-1 cursor-pointer">
                            <div className="flex h-6 items-center">
                                <input
                                    checked={checkedValues.includes(option.value)}
                                    onChange={handleClick}
                                    id={option.value}
                                    name={id}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                                    value={option.value}
                                />
                            </div>
                            <div className="text-sm leading-6 flex gap-2">
                                {option.svg}
                                <label htmlFor={option.value} className="font-medium text-gray-900 text-base cursor-pointer">
                                    {option.value}
                                </label>
                                <p className="text-gray-500">{option.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    )
}

export default CheckBox
