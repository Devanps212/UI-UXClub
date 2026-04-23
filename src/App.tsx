import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/home";
import MainLayout from "./layout/mainLayout";
import Meetups from "./pages/user/meetups";
import About from "./pages/user/about";
import Showcase from "./pages/user/showcase";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="meetups" element={<Meetups />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
