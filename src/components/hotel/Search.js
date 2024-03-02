import Select from "../form/Select";
import { sortOptions } from "../../utils/constant";

const Search = ({ setSearch, setSort, search }) => {

    const openCogeAPI = process.env.REACT_APP_OPEN_COGE_API;

    const handleSort = (value) => {
        const sort = { _sort: value.sort, _order: value.order };
        setSort(sort);
    }

    const handleChange = (e) => {
        setSearch({ ...search, [e.target.id]: e.target.value })
    }

    const getAddress = async (latitude, longitude) => {
        const query = `${latitude},${longitude}`;
        const geocodeUrl =
            `https://api.opencagedata.com/geocode/v1/json` +
            "?" +
            "key=" +
            openCogeAPI +
            "&q=" +
            encodeURIComponent(query) +
            "&pretty=1" +
            "&no_annotations=1";
        try {
            const response = await fetch(geocodeUrl);
            if (!response.ok) {
                throw new Error("Unable to fetch data");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleCurrentLocation = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const data = await getAddress(latitude, longitude)
                    setSearch({ ...search, location: data.results[0].components.state })
                },
                (error) => {
                    alert.error("Plase enable location to use current location")
                }
            );
        } else {
            alert.error("Plase enable location to use current location")
        }
    };

    return (
        <div className="mt-5 flex-col lg:flex-row flex gap-2">
            <div className="block w-full">
                <input
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:mx-5"
                    placeholder="Search Hotel By Name..."
                    onChange={handleChange}
                    value={search.title}
                />
            </div>
            <div className="relative w-full">
                <input
                    id="location"
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:mx-5"
                    placeholder="Search Hotel By Location..."
                    onChange={handleChange}
                    value={search.location}
                />
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-md hover:bg-indigo-600 focus:outline-none"
                    onClick={handleCurrentLocation}
                >
                    Use Current
                </button></div>

            <Select options={sortOptions} onClick={handleSort} />

        </div>
    )
}

export default Search
