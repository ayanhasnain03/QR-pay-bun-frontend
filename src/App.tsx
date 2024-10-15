import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CheckOut from "./pages/CheckOut";
import Success from "./pages/Success";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckOut />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default Main;
