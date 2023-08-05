import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "5px",
    background: "linear-gradient(to right, #ff9f00, #ff005a)",
    color: "#ffffff",
    fontSize: "14px",
    opacity: 0.8,
    height: "3vh",
  };

  return (
    <footer style={footerStyle}>
      &copy; {currentYear} Abhishek Kumar. All rights reserved. | Powered by
      KMaar Miscellaneous Studio
    </footer>
  );
};

export default Footer;
