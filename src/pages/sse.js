import React from "react";

import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import SathyaSaiMenu from "../components/navbarmenu/navmenu";
import Banner from "../components/banner/banner";

function SSE() {
  return (
    <div className="SSE">
        <SathyaSaiMenu />
        <Banner />
        <Contact />
        <Footer />
    </div>
  );
}
export default SSE;
