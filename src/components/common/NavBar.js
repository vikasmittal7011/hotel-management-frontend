import { useContext } from "react";
import { Link } from "react-router-dom";
import { Bars4Icon, CalculatorIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

import { UserContext } from "../../context/UserContext";

const NavBar = () => {

  const { user } = useContext(UserContext)

  return <div>
    <header className="flex justify-between items-center">

      <Link to="/">
        <div className="flex gap-1">
          <CalculatorIcon className="h-6 w-6" />
          <span className="font-bold">Tour</span>
        </div></Link>

      <div className="xs:hidden md:flex border border-1 border-gray-300 rounded-full items-center gap-3 px-5 py-1 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300 border-y-8" ></div>
        <div>Any Week</div>
        <div className="border-l border-gray-300 border-y-8" ></div>
        <div className="text-gray-500">Add Guest</div>
        <div className="bg-primary rounded-full p-1 text-white">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </div>
      </div>

      <Link to={user ? "/profile/" : "/login"}>
        <div className="flex border border-1 border-gray-300 rounded-full items-center gap-3 px-5 py-1 shadow-md shadow-gray-300">
          <Bars4Icon className="w-6 h-6" />
          <div className="rounded-full p-1 text-white bg-gray-500">
            <UserIcon className="w-4 h-4" />
          </div>
          {user && (
            <div>
              {user.name.substring(0, 5)}...
            </div>
          )}
        </div>
      </Link>

    </header>
  </div>;
};

export default NavBar;
