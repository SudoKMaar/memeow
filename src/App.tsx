import React from "react";
import Header from "./components/Header";
import Cat from "./components/Cat";
import Footer from "./components/Footer";

function App() {
  const handleDownload = () => {
    console.log("Downloading meme...");
  };

  return (
    <>
      <Header handleDownload={handleDownload} />
      <Cat handleDownload={handleDownload} />
      <Footer />
    </>
  );
}

export default App;
