const Select = ({ onClick, options }) => {

    const handleChange = (e) => {
        const selectedValue = (e.target.value);

        const selectedOption = options.find((o) => o.name === selectedValue)

        onClick(selectedOption)
    };

    return (
        <>
            <select onChange={handleChange} className="rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:mx-5">
                <option value="">Select Option</option>
                {options.map((option, i) => (
                    <option value={option.name} key={i}>{option.name}</option>
                ))}
            </select>
        </>
    );
};

export default Select;
