import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import FoodCategory from "../components/FoodCategory";
import Extra from "../components/Extra";
import MenuComponent from "../components/Menu";
import Testimonials from "../components/Testimonals";
import FeaturedItems from "../components/FeaturedItems";
import OurChefs from "../components/OurChefs";
import ActiveRestaurant from "../components/ActiveRestaurant";
import BlogEnding from "../components/BlogEnding";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <FoodCategory />
      <Extra />
      <FeaturedItems />
      <MenuComponent />
      <OurChefs />
      <Testimonials />
      <ActiveRestaurant />
      <BlogEnding />
    </div>
  );
}
