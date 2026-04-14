import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/home";
import MainLayout from "./layout/mainLayout";
import Showcase from "./pages/user/showcase";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
