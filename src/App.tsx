import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/home";
import MainLayout from "./layout/mainLayout";
import Showcase from "./pages/user/showcase";
import Meetups from "./pages/user/meetups";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/meetups" element={<Meetups />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
