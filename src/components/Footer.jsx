import React from "react";

// to get the current year
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {year}</p>
    </footer>
  );
}

export default Footer;
