"use client"; 
// Ensures this component is rendered and executed on the client side, enabling interactive features like routing and UI state management.

import { useRouter } from "next/navigation"; // Importing the Next.js router to enable navigation between pages.
import { CiSearch } from "react-icons/ci"; // Importing the search icon for the search bar.
import { IoBagHandle } from "react-icons/io5"; // Importing the bag icon, representing the shopping cart.
import { HiMenuAlt3 } from "react-icons/hi"; // Importing the hamburger menu icon for mobile navigation.
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet"; 
// Importing components for a slide-out menu used in mobile navigation.

export default function Navbar() {
  const router = useRouter(); // useRouter hook for programmatic navigation (redirects).

  // List of navigation links with their names and paths.
  const navigationItems = [
    { name: "Home", path: "/" },       // Navigates to Home page
    { name: "Menu", path: "/menu" },   // Navigates to Menu page
    { name: "Blog", path: "/blog" },   // Navigates to Blog page
    { name: "FAQ", path: "/faq" },     // Navigates to FAQ page
    { name: "About", path: "/about" }, // Navigates to About page
    { name: "Shop", path: "/shoplist" }, // Navigates to Shop page
    { name: "Contact", path: "/Contact" }, // Navigates to Contact page
  ];

  return (
    <nav className="bg-black text-white p-4 w-full">
      {/* 
        - bg-black: Background color set to black.
        - text-white: Text color set to white for contrast.
        - p-4: Adds padding on all sides (16px).
        - w-full: Makes the navbar span the full width of the screen.
      */}
      
      <div className="flex items-center justify-between px-4 lg:px-20 xl:px-32 2xl:px-40">
        {/* 
          - flex: Enables Flexbox layout for horizontal alignment.
          - items-center: Vertically aligns elements in the center.
          - justify-between: Places elements on opposite ends (logo on left, icons on right).
          - px-4: Adds padding inside the navbar for small screens.
          - lg:px-20, xl:px-32, 2xl:px-40: Increases padding as screen size grows.
        */}

        {/* LOGO SECTION */}
        <div className="text-2xl font-bold">
          {/* 
            - text-2xl: Sets font size to 24px for prominence.
            - font-bold: Makes the logo text bold.
          */}
          <span className="text-orange-500">Food</span>tuck 
          {/* 
            - text-orange-500: Highlights 'Food' in orange for emphasis.
          */}
        </div>

        {/* MOBILE NAVIGATION (VISIBLE ONLY ON SMALL SCREENS) */}
        <div className="lg:hidden flex justify-between">
          {/* 
            - lg:hidden: Hides this section on large screens and up.
            - flex: Aligns the hamburger menu horizontally.
            - justify-between: Distributes items evenly in the container.
          */}
          
          <Sheet> 
            <SheetTrigger>
              <HiMenuAlt3 className="text-orange-500 text-[34px] cursor-pointer" />
              {/* 
                - text-orange-500: Sets icon color to orange.
                - text-[34px]: Makes the icon size 34px for visibility.
                - cursor-pointer: Changes the cursor to a pointer for clickability.
              */}
            </SheetTrigger>
            
            <SheetContent>
              <ul className="flex flex-col gap-3 font-medium text-[16px] text-black">
                {/* 
                  - flex flex-col: Arranges links vertically inside the mobile menu.
                  - gap-3: Adds spacing between links.
                  - font-medium: Applies medium font weight.
                  - text-[16px]: Sets font size to 16px.
                  - text-black: Sets text color to black for contrast with the white menu background.
                */}
                {navigationItems.map((item) => (
                  <li 
                    key={item.name} 
                    className="hover:text-orange-500" 
                    onClick={() => router.push(item.path)} 
                  >
                    {/* 
                      - hover:text-orange-500: Changes text color to orange when hovered.
                      - router.push(item.path): Navigates to the corresponding route.
                    */}
                    {item.name}
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* DESKTOP NAVIGATION (VISIBLE ONLY ON LARGER SCREENS) */}
        <ul className="hidden lg:flex gap-8 xl:gap-10 2xl:gap-12">
          {/* 
            - hidden: Hides this section by default.
            - lg:flex: Displays the links in a row starting at the large screen size.
            - gap-8, xl:gap-10, 2xl:gap-12: Adds spacing between navigation links, scaling with screen size.
          */}
          {navigationItems.map((item) => (
            <li 
              key={item.name} 
              className="hover:text-orange-500 cursor-pointer" 
              onClick={() => router.push(item.path)} 
            >
              {/* Same functionality as mobile links */}
              {item.name}
            </li>
          ))}
        </ul>

        {/* SEARCH AND CART ICON SECTION (VISIBLE ONLY ON LARGE SCREENS) */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {/* 
            - hidden: Hides this section by default.
            - lg:flex: Displays the search and cart icons for large screens.
            - items-center: Vertically centers icons.
            - space-x-4, xl:space-x-6: Adds horizontal spacing between elements.
          */}

          {/* SEARCH BAR */}
          <div className="relative"> 
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-black border border-orange-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500" 
            />
            {/* 
              - bg-black: Matches the navbar background.
              - border-orange-500: Adds an orange border.
              - rounded-full: Makes the input field oval-shaped.
              - px-4 py-2: Adds padding inside the input field.
              - focus:ring: Highlights the border when input is active.
            */}
            <CiSearch className="absolute top-2.5 right-3" />
            {/* Positioned icon inside input */}
          </div>

          {/* SHOPPING CART ICON */}
          <IoBagHandle className="w-6 h-6 cursor-pointer" /> 
          {/* 
            - w-6 h-6: Sets width and height to 24px.
            - cursor-pointer: Makes the icon clickable.
          */}
        </div>
      </div>
    </nav>
  );
}
