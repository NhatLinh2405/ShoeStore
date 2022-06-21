import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopSection from "../components/homeComponents/ShopSection";
import Contact from "../components/homeComponents/Contact";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";

export default function HomeScreen() {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <ShopSection />
            <CalltoActionSection />
            <Contact />
            <Footer />
        </div>
    );
}
