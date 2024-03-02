import { ArrowLeftStartOnRectangleIcon, BuildingStorefrontIcon, RadioIcon, TruckIcon, TvIcon, WifiIcon } from "@heroicons/react/24/outline";

export const ITEM_PAGE_PER = 10

export const Classes = {
    h1_size:
        "2xl:text-6xl lg:text-3xl md:text-2xl sm:text-xl l:text-xl s:text-xl",
    commonClass: "cursor-pointer relative items-center py-2",

    commonBTNClass:
        "bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 inline-flex  rounded-md border border-gray-300",

    commonSreenBTNClass:
        "inline-flex px-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",

    hoverClass:
        "hidden px-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",

    activeClass:
        "z-10 inline-flex bg-indigo-600 px-4 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",

    flexDirectionClass:
        "lg:flex-row md:flex-row sm:flex-row l:flex-col s:flex-col xs:flex-col",
};

export const perks = [
    {
        value: "Wifi",
        message: "",
        svg: <WifiIcon className="w-6 h-6" />
    },
    {
        value: "Free Parking",
        message: "",
        svg: <TruckIcon className="w-6 h-6" />
    },
    {
        value: "TV",
        message: "",
        svg: <TvIcon className="w-6 h-6" />
    },
    {
        value: "Radio",
        message: "",
        svg: <RadioIcon className="w-6 h-6" />
    },
    {
        value: "Pets",
        message: "",
        svg: <BuildingStorefrontIcon className="w-6 h-6" />
    },
    {
        value: "Private Entrance",
        message: "",
        svg: <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />

    },
]

export const validHotelInfo = (hotelInfo, perk, images) => {
    if (hotelInfo.checkIn === "") {
        return { success: false, message: "Enter valid checkIn time" }
    }
    else if (hotelInfo.checkOut === "") {
        return { success: false, message: "Enter valid checkOut time" }
    }
    else if (hotelInfo.city === "") {
        return { success: false, message: "Enter valid city" }
    }
    else if (hotelInfo.country === "") {
        return { success: false, message: "Enter valid country" }
    }
    else if (hotelInfo.discription === "") {
        return { success: false, message: "Enter valid discription" }
    }
    else if (hotelInfo.extraInfo === "") {
        return { success: false, message: "Enter valid extraInfo" }
    }
    else if (hotelInfo.maxGuests === "") {
        return { success: false, message: "Enter valid maxGuests" }
    }
    else if (hotelInfo.pin === "") {
        return { success: false, message: "Enter pin" }
    }
    else if (hotelInfo.price === "") {
        return { success: false, message: "Enter valid price" }
    }
    else if (hotelInfo.state === "") {
        return { success: false, message: "Enter valid state" }
    }
    else if (hotelInfo.street === "") {
        return { success: false, message: "Enter valid street" }
    }
    else if (hotelInfo.title === "") {
        return { success: false, message: "Enter valid title" }
    } else if (perk.length === 0) {
        return { success: false, message: "Select aleast 1 perk" }
    } else if (images.length < 5) {
        return { success: false, message: "Select aleast 5 images" }
    } else {
        return { success: true }
    }
}

export const paymentMathods = [
    { id: 1, name: "Cash" },
    { id: 1, name: "Card" },
]

export const amountAfterTax = (hotel, bookingInfo, setBookingInfo) => {
    const amount = (hotel.price * bookingInfo.guest) * (18 / 100)

    if (bookingInfo.checkIn && bookingInfo.checkOut) {
        const differenceMS = Math.abs(new Date(bookingInfo.checkIn) - new Date(bookingInfo.checkOut))

        const days = Math.ceil(differenceMS / (1000 * 60 * 60 * 24))

        const totalAmount = (amount + (hotel.price * bookingInfo.guest)) * days
        setBookingInfo({ ...bookingInfo, totalAmount, days })
    } else {
        const totalAmount = (amount + (hotel.price * bookingInfo.guest))
        setBookingInfo({ ...bookingInfo, totalAmount })
    }
}

export const numbersOfNigts = (checkIn, checkOut) => {

    const differenceMS = Math.abs(new Date(checkIn) - new Date(checkOut))

    return Math.ceil(differenceMS / (1000 * 60 * 60 * 24))

}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export const sortOptions = [
    { name: "Best Rating", sort: "rating", order: "desc", current: false },
    {
        name: "Price: Low to High",
        sort: "price",
        order: "asc",
        current: false,
    },
    {
        name: "Price: High to Low",
        sort: "price",
        order: "desc",
        current: false,
    },
];