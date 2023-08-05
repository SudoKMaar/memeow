import React from "react";
import memeow from "../assets/memeow.png";
import DownloadButton from "./DownloadButton";

interface HeaderProps {
  handleDownload: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleDownload }) => {
  return (
    <header className="header">
      <img src={memeow} className="headerImage" alt="memeow" />
      <h2 className="headerTitle">MEMEOW</h2>
      <h3>
        <DownloadButton
          className="formButton"
          onClick={handleDownload}
          imageUrl=""
          topText=""
          bottomText=""
        />
      </h3>
    </header>
  );
};

export default Header;
