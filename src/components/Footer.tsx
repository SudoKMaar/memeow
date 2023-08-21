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

  const linkStyle: React.CSSProperties = {
    color: "inherit",
    textDecoration: "none",
  };
  return (
    <footer style={footerStyle}>
      &copy; {currentYear}{" "}
      <a
        href="https://kmaar.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Abhishek Kumar
      </a>
      . All rights reserved. | Powered by{" "}
      <a
        href="https://kmstudio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        KMaar Miscellaneous Studio
      </a>
    </footer>
  );
};

export default Footer;
