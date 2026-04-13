import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
