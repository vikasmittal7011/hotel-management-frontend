import { useState } from "react";

import Input from "../components/form/Input";
import { Link, Navigate } from "react-router-dom";
import { useAlert } from "react-alert";
import useFetchApiCall from "../hooks/useFetchApiCall";

const ResetPassword = () => {
  const { apiCall, loading } = useFetchApiCall()
  const alert = useAlert()
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  const defaultValue = {
    password: "",
    confirmPassword: "",
  };
  const [passwords, setPasswords] = useState(defaultValue);
  const [resetPassword, setResetPassword] = useState(false);

  const handlePassword = (id, value) => {
    setPasswords({ ...passwords, [id]: value });
  };

  const validate = (data) => {
    if (data.password.length < 4) {
      alert.error("Password must be 4 char");
      return false;
    } else if (data.password !== data.confirmPassword) {
      alert.error(`Password should be match`);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validform = validate(passwords);
    if (validform) {
      try {
        const response = await apiCall("/auth/reset-password", "POST", { password: passwords.password, token: token })
        if (response.success) {
          alert.success("Password is reset successfully, Plase login again")
          setResetPassword(true)
        } else {
          alert.error(response.message)
        }
      } catch (error) {
        alert.error(error.message)
      }
    }
  };

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  if (resetPassword) {
    return <Navigate to="/signin" replace={true} />;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Change your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              name="New Password"
              id="password"
              type="password"
              placeholder="Enter your password..."
              value={passwords.password}
              onClick={handlePassword}
            />
            <Input
              name="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="Enter password again..."
              value={passwords.confirmPassword}
              onClick={handlePassword}
            />
            <div>
              <button
                disabled={loading}
                type="submit"
                className={`w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-center items-center gap-2 ${loading ? "cursor-not-allowed" : "cursor-pointer"} `} >
                Chnage Password
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Send me back to{" "}
            <Link
              to="/signin"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >Login</Link>
          </p>
        </div >
      </div >
    </>
  );
};

export default ResetPassword;
