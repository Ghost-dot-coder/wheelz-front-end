import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Wheelz. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
