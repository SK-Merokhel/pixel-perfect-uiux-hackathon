import React from 'react'; // Importing React to enable JSX syntax and component functionality.
import Image from "next/image"; // Importing Next.js Image component for optimized image handling.
import menu from "../../public/assets/menu.png"; // Importing a menu decoration image used in the left section.

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu1.png' },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu2.png' },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu3.png' },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu4.png' },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu5.png' },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/menu6.png' },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu7.png' },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/menu8.png' },
];
// Menu items array holding the data for each item on the menu, including name, description, price, and image.

const MenuComponent = () => {
  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      {/* 
        - bg-black: Sets the background color of the section to black.
        - px-8 sm:px-16 lg:px-[135px]: Padding for horizontal sides, responsive with screen size.
        - text-white: Sets the text color to white for contrast against the black background.
        - py-12: Adds padding to the top and bottom (48px).
      */}
      
      <div className="container mx-auto">
        {/* 
          - container: Centers and limits the width of the content.
          - mx-auto: Centers the container horizontally within its parent.
        */}
        
        <h2 className="text-2xl font-bold text-center mb-2 font-greatVibes text-[#FF9F0D]">
          Choose & Pick
        </h2>
        {/* 
          - text-2xl: Font size for the subheading (32px).
          - font-bold: Makes the text bold.
          - text-center: Centers the text horizontally.
          - mb-2: Adds bottom margin (8px).
          - font-greatVibes: A custom font for stylized text.
          - text-[#FF9F0D]: Sets text color to orange.
        */}

        <h1 className="text-3xl font-bold text-center mb-8">
          <span className='text-[#FF9F0D]'>Fr</span>om Our Menu
        </h1>
        {/* 
          - text-3xl: Font size for the main heading (48px).
          - mb-8: Adds bottom margin (32px).
          - The 'Fr' is highlighted in orange using a span tag for emphasis.
        */}

        {/* Category Selection Section */}
        <div className="flex justify-center mb-8">
          {/* 
            - flex: Uses flexbox for layout.
            - justify-center: Centers the content horizontally.
            - mb-8: Adds bottom margin (32px).
          */}
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
            {/* 
              - flex-wrap: Allows items to wrap when the screen size shrinks.
              - justify-evenly: Distributes items evenly within the container.
              - space-x-2 sm:space-x-4: Horizontal spacing between list items, responsive to screen size.
            */}
            <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
            <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
            <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
            <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
            <li className="cursor-pointer hover:text-yellow-500">Drink</li>
            <li className="cursor-pointer hover:text-yellow-500">Snack</li>
            <li className="cursor-pointer hover:text-yellow-500">Soups</li>
            {/* 
              - cursor-pointer: Changes the cursor to a pointer on hover, indicating it's clickable.
              - hover:text-yellow-500: Changes text color to yellow when hovered.
            */}
          </ul>
        </div>

        {/* Menu Items Display Section */}
        <div className='flex flex-col lg:flex-row'>
          {/* 
            - flex-col: Displays content vertically on small screens.
            - lg:flex-row: Switches to a horizontal layout on larger screens (large breakpoint and up).
          */}

          {/* Left Section: Decorative Image */}
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            {/* 
              - hidden lg:block: Hides this section on small screens and shows only on larger screens.
              - w-1/3: Assigns 33.33% width to the image container on large screens.
              - md:w-[50%]: On medium screens, sets width to 50%.
            */}
            <Image src={menu} alt="Menu Decor" layout="responsive" />
            {/* 
              - The Image component is used to display the menu decoration image.
              - layout="responsive": Ensures the image resizes responsively while maintaining its aspect ratio.
            */}
          </div>

          {/* Right Section: Menu Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {/* 
              - grid: Uses CSS Grid layout for positioning the menu items.
              - grid-cols-1: Displays one column on small screens.
              - md:grid-cols-2: Two columns for medium and up screens.
              - lg:grid-cols-2: Two columns for large and up screens.
              - gap-8: Adds a gap between grid items (32px).
              - flex-grow: Allows the content to grow and take up available space.
            */}

            {/* Iterating through the menuItems array to display each item */}
            {menuItems.map((item, index) => (
              <div key={index} className="flex rounded-lg overflow-hidden shadow-lg">
                {/* 
                  - flex: Applies flexbox layout for each menu item.
                  - rounded-lg: Applies rounded corners for a smooth visual effect.
                  - overflow-hidden: Hides any content that overflows the container's boundary.
                  - shadow-lg: Adds a large shadow around each menu item to create depth.
                */}
                
                {/* Menu Item Image */}
                <div className="w-1/3">
                  {/* 
                    - w-1/3: Assigns 33.33% width for the image container.
                    - The image is optimized and displayed using Next.js Image component.
                  */}
                  <Image src={item.image} alt={item.name} width={100} height={100} className="object-cover" />
                  {/* 
                    - object-cover: Ensures the image covers the available space while maintaining its aspect ratio.
                  */}
                </div>

                {/* Menu Item Description and Price */}
                <div className="p-4 w-2/3">
                  {/* 
                    - p-4: Padding inside the content container (16px).
                    - w-2/3: Assigns 66.67% width for the text container.
                  */}
                  
                  {/* Item Name */}
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  {/* 
                    - text-lg: Sets font size to 18px for the item name.
                    - font-semibold: Applies semi-bold font weight to the name.
                  */}

                  {/* Item Description */}
                  <p className="text-[11px] text-gray-400 mb-2">{item.description}</p>
                  {/* 
                    - text-[11px]: Font size for the description (11px).
                    - text-gray-400: Sets description text color to a light gray.
                    - mb-2: Adds a bottom margin (8px) between the description and price.
                  */}

                  {/* Item Price */}
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                  {/* 
                    - text-yellow-400: Sets the price color to yellow for emphasis.
                    - font-bold: Applies bold styling to the price.
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuComponent;
