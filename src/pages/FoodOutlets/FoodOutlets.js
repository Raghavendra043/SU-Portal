import React from "react";
import Outlet from "../../components/FoodOutlets/Outlet";
import "./FoodOutlets.css"
import Footer from "../../components/Footer/Footer";
import footer from "../../assets/images/footer.png";

export default function FoodOutlets() {
  return (
    <div>
      <div className="hero_fo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum ad
        quos dolore sunt dolores! Accusantium beatae dolores obcaecati tempore
        minus? Eveniet, nobis officiis magni qui nihil, odio cumque eos ducimus
        minus repellendus omnis excepturi, atque exercitationem sint! Repellat
        est distinctio vel neque fuga nisi nostrum porro aspernatur, atque magni
        dolore quia! Nostrum nihil minus atque sint odit. Suscipit id nulla
        repudiandae? Ducimus quidem et culpa quaerat perspiciatis hic sint
        aspernatur amet, iure numquam voluptates assumenda libero, autem
        reiciendis voluptate. Harum libero consequatur similique. Officia itaque
        omnis, modi numquam at nemo, totam reprehenderit aliquam, assumenda iste
        minus nihil cumque eveniet.
      </div>
      <Outlet Name="Yummpys" />
      <div>
        <Footer background={footer} />
      </div>
    </div>
  );
}
