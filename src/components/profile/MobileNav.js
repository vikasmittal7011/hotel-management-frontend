import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment, useRef } from "react"
import { Link } from "react-router-dom"

const MobileNav = ({ user }) => {

    const buttonRef = useRef()

    const hanleClick = () => {
        buttonRef.current.click()
    }

    return (
        <nav className="md:hidden block">
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button ref={buttonRef}>
                                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                {open ? (
                                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                                            s                   <Menu.Item>
                                                <Link onClick={hanleClick} to="/profile" className={`py-2 px-6`}>Profile</Link>
                                            </Menu.Item>
                                            {user.role === "user" &&
                                                <Menu.Item>
                                                    <Link onClick={hanleClick} to="/profile/booking" className={`py-2 px-6}`}>My Booking</Link>
                                                </Menu.Item>
                                            }
                                            {user.role === "admin" &&
                                                <Menu.Item>
                                                    <Link onClick={hanleClick} to="/profile/admin-booking" className={`py-2 px-6`}>Booking's</Link>
                                                </Menu.Item>
                                            }
                                            {user.role === "admin" &&
                                                <Menu.Item>
                                                    <Link onClick={hanleClick} to="/profile/add-hotel" className={`py-2 px-6`}>Add Hotel</Link>
                                                </Menu.Item>
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </nav>
    )
}

export default MobileNav
