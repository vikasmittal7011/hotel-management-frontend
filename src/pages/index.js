import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const ConfirmOTP = lazy(() => import("./ConfirmOTP"));
const Profile = lazy(() => import("./Profile"));
const HotelDetails = lazy(() => import("./HotelDetails"));
const ConfirmBooking = lazy(() => import("./ConfirmBooking"));
const EditHotelForm = lazy(() => import("./EditHotelForm"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const BookingConfirm = lazy(() => import("./BookingConfirm"));
const BookingFailer = lazy(() => import("./BookingFailer"));

export { Home, Login, BookingConfirm, BookingFailer, Register, ConfirmOTP, Profile, HotelDetails, ConfirmBooking, EditHotelForm, ForgotPassword, ResetPassword };
