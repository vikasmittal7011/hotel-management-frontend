import { Suspense } from "react";
import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return <div>
    <Suspense fallback="Loading">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Suspense>
  </div>;
};

export default App;
