import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const ConfirmOTP = lazy(() => import("./ConfirmOTP"));

export { Home, Login, Register, ConfirmOTP };
