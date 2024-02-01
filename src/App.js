import { Suspense } from "react";
import { ConfirmOTP, Home, Login, Register } from "./pages";
import { Route, Routes } from "react-router-dom";
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";


const App = () => {

  const options = {
    timeout: 5000,
    position: positions.BOTTOM_LEFT,
  };

  return <div className="p-4">
    <Suspense fallback="Loading">
      <Provider template={AlertTemplate} {...options}>

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/confirm-otp" exact element={<ConfirmOTP />}></Route>
          <Route path="*" exact element={<Home />}></Route>
        </Routes>
      </Provider>
    </Suspense>
  </div>;
};

export default App;
