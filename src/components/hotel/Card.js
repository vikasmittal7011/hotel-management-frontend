import { Link } from "react-router-dom"

const Card = ({
    hotel
}) => {
    return (
        <Link to={`/hotel/${hotel?.id}`} className="rounded-xl overflow-hidden shadow-lg cursor-pointer ">
            <img className="w-full" src={hotel?.photos?.[0]} alt="Mountain" />
            <div className="px-3 py-4">
                <div className='flex justify-between items-center'>
                    <h2 className="font-bold text-xl mb-2">{hotel?.title.substring(0, 10)} ...</h2>
                    <h3 className="font-semibold text-lg flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        {hotel?.rating || 5}</h3>
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
