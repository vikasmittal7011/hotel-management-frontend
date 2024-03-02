import { StarIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"

const Card = ({
    hotel
}) => {
    return (
        <Link to={`/hotel/${hotel?.id}`} className="rounded-xl overflow-hidden shadow-lg cursor-pointer">
            <img className="w-full" src={hotel?.photos?.[0]} alt="Mountain" />
            <div className="px-3 py-4">
                <div className='flex justify-between items-center'>
                    <h2 className="font-bold text-xl mb-2">{hotel?.title.substring(0, 10)} ...</h2>
                    {hotel?.rating && <h3 className="font-semibold text-lg flex gap-1 items-center">
                        <StarIcon className="h-5 w-5" />
                        {hotel?.rating || 5}
                    </h3>
                    }
                </div>
                <p className="text-gray-500 text-base">
                    {hotel?.discription.substring(0, 90)} ...
                </p>
                <p className="text-gray-800 font-bold">
                    {hotel?.city}, {hotel.country}
                </p>
                <p className="text-gray-800 font-medium">
                    ₹ {hotel?.price} Per Night
                </p>

            </div>
        </Link>
    )
}

export default Card
