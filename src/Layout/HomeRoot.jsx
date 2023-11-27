import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "../Components/Home/Home.css"

function HomeRoot() {
  return (
    <div id="background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeRoot;
