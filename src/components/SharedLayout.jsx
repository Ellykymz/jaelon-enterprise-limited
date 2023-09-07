import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default SharedLayout;
