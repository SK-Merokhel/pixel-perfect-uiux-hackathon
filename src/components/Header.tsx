import React from "react"; // Importing React to enable JSX syntax and component functionality.

function Header() {
  return (
    <>
      {/* The Header component renders a section with a title */}
      <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4">
        {/* 
          - w-full: Sets the width of the header to 100% of the parent container.
          - h-[50px]: Sets the height of the header to 50px.
          - bg-black: Sets the background color of the header to black.
          - text-white: Sets the text color to white, providing a contrast with the black background.
          - flex: Applies flexbox layout for positioning the content inside the header.
          - justify-center: Centers the content horizontally within the header.
          - items-center: Centers the content vertically within the header.
          - px-4: Adds padding to the left and right sides of the header (16px).
        */}

        <h2 className="text-[24px] font-bold">
          {/* 
            - text-[24px]: Sets the font size of the title to 24px.
            - font-bold: Applies a bold weight to the text.
          */}
          <span className="text-[#FF9F0D]">Food</span>Tuck
          {/* 
            - The text "Food" is styled with a different color using a span tag.
            - text-[#FF9F0D]: Sets the color of the "Food" text to orange (#FF9F0D).
            - The remaining part, "Tuck", keeps the default white text color.
          */}
        </h2>
      </header>
    </>
  );
}

export default Header;
