import { Link, useParams } from "react-router-dom"
import NavBar from "../components/common/NavBar"
import Infomation from "../components/profile/Infomation"
import Booking from "../components/profile/Booking"
import Places from "../components/profile/Places"

const Profile = () => {

    const { subpage } = useParams()

    return (
        <div>
            <NavBar />

            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link to="/profile" className={`py-2 px-6 ${subpage === undefined && "bg-primary text-white rounded-full"}`}>Profile</Link>
                <Link to="/profile/booking" className={`py-2 px-6 ${subpage === "booking" && "bg-primary text-white rounded-full"}`}>My Booking</Link>
                <Link to="/profile/places" className={`py-2 px-6 ${subpage === "places" && "bg-primary text-white rounded-full"}`}>My Acommandation</Link>
            </nav>

            <div>
                {subpage === undefined && <Infomation />}
                {subpage === "booking" && <Booking />}
                {subpage === "places" && <Places />}
            </div>

        </div>
    )
}

export default Profile
