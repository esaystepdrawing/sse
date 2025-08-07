import React from "react";

import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import SathyaSaiMenu from "../components/navbarmenu/navmenu";
import Banner from "../components/banner/banner";
import SaiService from "../components/saiservice/saiservice";

function SaiServicePage() {
  return (
    <div className="SSE">
        <SathyaSaiMenu />
        <Banner title="Sai Service" pic="/images/Service.jpg" />
        <SaiService />
        <Footer />
    </div>
  );
}
export default SaiServicePage;
