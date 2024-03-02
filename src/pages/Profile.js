import { useContext } from "react"
import { Link, useParams } from "react-router-dom"

import NavBar from "../components/common/NavBar"
import Booking from "../components/profile/Booking"
import { UserContext } from "../context/UserContext"
import MobileNav from "../components/profile/MobileNav"
import Infomation from "../components/profile/Infomation"
import AddHotelForm from "../components/profile/AddHotelForm"
import AdminBooking from "../components/profile/AdminBooking"

const Profile = () => {

    const { user } = useContext(UserContext)

    const { subpage } = useParams()

    return (
        <div>
            <NavBar />

            <nav className="w-full hidden md:flex justify-center mt-8 gap-2">
                <Link to="/profile" className={`py-2 px-6 ${subpage === undefined && "bg-primary text-white rounded-full"}`}>Profile</Link>
                {user.role === "user" && <Link to="/profile/booking" className={`py-2 px-6 ${subpage === "booking" && "bg-primary text-white rounded-full"}`}>My Booking</Link>}
                {user.role === "admin" && <Link to="/profile/admin-booking" className={`py-2 px-6 ${subpage === "admin-booking" && "bg-primary text-white rounded-full"}`}> Booking's</Link>}
                {user.role === "admin" && <Link to="/profile/add-hotel" className={`py-2 px-6 ${subpage === "add-hotel" && "bg-primary text-white rounded-full"}`}>Add Hotel</Link>}
            </nav>

            <MobileNav user={user} />

            <div>
                {subpage === undefined && <Infomation />}
                {user.role === "user" && <>{subpage === "booking" && <Booking />}</>}
                {user.role === "admin" && <>{subpage === "admin-booking" && <AdminBooking />}</>}
                {user.role === "admin" && <>{subpage === "add-hotel" && <AddHotelForm />}</>}
            </div>

        </div>
    )
}

export default Profile
