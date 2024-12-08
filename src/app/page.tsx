import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Hero from "./components/hero";
import AboutUs from "./components/aboutus";
import FoodCategory from "./components/FoodCategory";
import MenuCom from "./components/menu";
// import Pics from "./components/items";
import WhyChoseUs from "./components/WhyChoseUs";
import Testimonials from "./components/testimonals";
import Items from "./components/items";
import Ourchefs from "./components/ourchefs";
import ActiveRestaurant from "./components/ActiveRestaurant";
import Blogending from "./components/Blogending";

export default function Home() {
  return (
    <>
    <div>
    <Header />
    <Navbar />
    <Hero />
    <AboutUs />
    <FoodCategory />
    <WhyChoseUs />
    <MenuCom />
    <Ourchefs />
    <Items />
    {/* <Pics /> */}
    <Testimonials />
    <ActiveRestaurant />
    <Blogending />
    <Footer />
    </div>
    </>
  )
}