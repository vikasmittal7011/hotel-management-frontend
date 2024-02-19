import { useState } from "react";

import Input from "../components/form/Input";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import useFetchApiCall from "../hooks/useFetchApiCall";
import { ClipLoader } from "react-spinners";

const ForgotPassword = () => {

  const alert = useAlert()

  const [email, setEmail] = useState("");
  const [sendMail, setSendMail] = useState(false);

  const { apiCall, loading } = useFetchApiCall()

  const manageEmail = (id, value) => {
    setEmail(value);
  };

  const validate = (email) => {
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

    if (!emailPattern.test(email)) {
      alert.error("Enter a valid email address!");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validform = validate(email);
    if (validform) {
      try {
        const response = await apiCall("/auth/reset-password-request", "POST", { email })
        if (response.success) {
          alert.success("Email is send successfully send")
          setSendMail(true)
        } else {
          alert.error(response.message)
        }
      } catch (error) {
        alert.error(error.message)

      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Send Password Reset Request
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-xl">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <Input
              name="Email address"
              id="email"
              type="email"
              placeholder="Enter your gamil address..."
              value={email}
              onClick={manageEmail}
            />
            <div>
              {
                !sendMail && (
                  <button disabled={loading} type="submit" onClick={handleSubmit} className={`w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-center items-center gap-2 ${loading ? "cursor-not-allowed" : "cursor-pointer"} `}> <ClipLoader color='white' size="20px" loading={loading} /> <div>Send Mail</div> </button>

                )
              }
              {
                sendMail && (
                  <p className="text-green-600 my-3 font-bold text-2xl text-center">
                    Request Is Send To Your Mail
                  </p>
                )
              }
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Send me back to{" "}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

