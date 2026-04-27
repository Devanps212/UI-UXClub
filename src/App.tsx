import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/home";
import MainLayout from "./layout/mainLayout";
import Meetups from "./pages/user/meetups";
import About from "./pages/user/about";
import Blog from "./pages/user/blog";
import Showcase from "./pages/user/showcase";
import Contests from "./pages/user/contests";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="meetups" element={<Meetups />} />
          <Route path="about" element={<About />} />
          <Route path="design-showcase" element={<Showcase />} />
          <Route path="contests" element={<Contests />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
