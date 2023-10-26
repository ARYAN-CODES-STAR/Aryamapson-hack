import React from "react";
import Header from "../pages/components/Header";
import Nav from "../pages/components/Nav";
import Search from "../pages/components/Search";
import Grid from "../pages/Grid";
import Footer from "../pages/components/Footer";
import Testimonials from "../pages/components/Testimonials";
import Maps from "../pages/components/maps";

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <Search />
            <Grid />
            <Testimonials />
            
            <Footer />
        </>
    )
}
export default Home;