import moment from "moment"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { BanknotesIcon, CalendarDaysIcon, CreditCardIcon, CurrencyRupeeIcon, EnvelopeIcon, MoonIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/outline"

import { numbersOfNigts } from "../../utils/constant"
import { UserContext } from "../../context/UserContext"

const BookingCard = ({ booking }) => {

    const { user } = useContext(UserContext)

    return (
        <div className="md:mt-5">
            {booking.map((book, i) => (
                <>
                    <div key={i} className="md:my-4 bg-gray-300 rounded-xl overflow-hidden flex items-center flex-col lg:flex-row gap-5">
                        <Link to={`/hotel/${book.hotel.id}`}>
                            <img className="object-cover lg:w-[445px]" src={book.hotel.photos[0]} alt="hotel" />
                        </Link>
                        <div className="md:py-4 grow mx-2 md:me-4">
                            <div>
                                <h1 className="font-bold xs:text-xl md:text-2xl lg:text-3xl">{book.hotel.title}</h1>
                                <a className="underline font-semibold xs:text-base md:text-lg lg:text-xl" target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${book.hotel.city},${book.hotel.country}`}>{book.hotel.city}, {book.hotel.country}</a>
                            </div>

                            <Border />

                            <div className="flex flex-col lg:flex-row gap-2 lg:items-center text-base text-gray-500">
                                <div className="flex items-center gap-1">
                                    <MoonIcon className="w-6 h-6" />
                                    <p>{numbersOfNigts(book.checkInDate, book.checkOutDate)} Nigths</p>
                                </div>

                                <div className="lg:border-l lg:border-2 border-gray-400 rounded-xl" />

                                <div className="flex flex-col lg:flex-row gap-2">
                                    <div className="flex items-center">
                                        <CalendarDaysIcon className="w-6 h-6" />
                                        {moment(new Date(book.checkInDate)).format("DD-MM-YYYY HH:MM")}
                                    </div>
                                    <div>
                                        <div className="hidden lg:block">&rarr;</div>
                                        <div className="lg:hidden ml-16">&darr;</div>
                                    </div>
                                    <div className="flex items-center">
                                        <CalendarDaysIcon className="w-6 h-6" />
                                        {moment(new Date(book.checkOutDate)).format("DD-MM-YYYY HH:MM")}
                                    </div>
                                </div>
                            </div>

                            <Border />

                            <div className="flex gap-2 items-center text-base text-gray-500">
                                <div className="flex items-center gap-1">
                                    <PhoneIcon className="w-6 h-6" />
                                    <p>{book.contact}</p>
                                </div>

                                <div className="border-l border-2 border-gray-400 rounded-xl" />

                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2">
                                        <UserIcon className="w-6 h-6" />
                                        {book.numberOfGuest} Guests
                                    </div>
                                </div>
                            </div>

                            <Border />

                            <div className="flex gap-2 items-center text-lg font-bold">
                                <div className="flex items-center gap-1">
                                    <CreditCardIcon className="w-6 h-6" />
                                    <p>{book.paymentMethod}</p>
                                </div>

                                <div className="border-l border-2 border-gray-400 rounded-xl" />

                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2">
                                        <CurrencyRupeeIcon className="w-6 h-6" />
                                        {book.price} /-
                                    </div>
                                </div>
                            </div>

                            <Border />

                            <div className="flex gap-2 items-center text-lg">
                                <div className="flex items-center gap-1">
                                    <BanknotesIcon className="w-6 h-6" />
                                    <p>Payment : {book.paymentDone ? "Done" : "Pending"}</p>
                                </div>
                            </div>

                            {user?.role === "admin" &&
                                <>
                                    <Border />

                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-center text-base text-gray-500 pb-2 lg:pb-0">
                                        <div className="flex flex-col lg:flex-row gap-2">
                                            <div className="flex items-center gap-1">
                                                <UserCircleIcon className="w-6 h-6" />
                                                {book.user.name}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <EnvelopeIcon className="w-6 h-6" />
                                                {book.user.email}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                    <Border />
                </>
            ))}
        </div>
    )
}

export default BookingCard

const Border = () => (
    <div className="border-t border-1 border-gray-400 my-3" />

)
