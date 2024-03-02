/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useAlert } from "react-alert"

import Card from "../hotel/Card"
import Search from "../hotel/Search"
import Loader from "../common/Loader"
import Pagination from "../hotel/Pagination"
import { ITEM_PAGE_PER } from "../../utils/constant"
import useFetchApiCall from "../../hooks/useFetchApiCall"

const Hotels = () => {

    const alert = useAlert()

    const { apiCall, loading, total: totalHotel } = useFetchApiCall()

    const [hotels, setHotels] = useState([]);
    const [page, setPage] = useState(1);

    const [sort, setSort] = useState("");
    const [search, setSearch] = useState({
        title: "",
        location: ""
    });

    const handlePage = (page) => {
        setPage(page);
    };

    const getHotels = async () => {
        let queryString = `_page=${page}&_limit=${ITEM_PAGE_PER}&`

        for (let key in sort) {
            queryString += `${key}=${sort[key]}&`;
        }

        if (search.title) {
            queryString += `title=${search.title}&`;
        }

        if (search.location) {
            queryString += `location=${search.location}&`;
        }

        try {
            const response = await apiCall("/hotel?" + queryString)
            setHotels(response.hotels)
        } catch (err) {
            alert.error(err.message)
        }
    }

    useEffect(() => {
        getHotels()
    }, [search.location, search.title, sort, page]);

    return (
        <>
            <Search setSearch={setSearch} setSort={setSort} search={search} />
            {
                loading ? <Loader /> :
                    <>
                        <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {hotels?.length > 0 &&
                                hotels?.map((hotel, i) => (<Card key={i} hotel={hotel} />))
                            }
                        </div>
                        <Pagination totalHotel={totalHotel} page={page} handlePage={handlePage} />
                    </>
            }

            {loading === false &&
                hotels?.length === 0 &&
                <div className="text-center -mt-10 font-bold text-2xl">No Match Found</div>
            }
        </>
    )
}

export default Hotels
