import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import Loader from "../assets/loader.svg";

interface CatState {
  topText: string;
  bottomText: string;
  randomImage: string;
}

interface CatProps {
  handleDownload: () => void;
}

const Cat: React.FC<CatProps> = ({ handleDownload }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cat, setCat] = useState<CatState>({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [catGifUrls, setCatGifUrls] = useState<string[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_CAT_API_KEY;
    if (!apiKey) {
      console.error("API KEY IS NOT PRESENT");
      return;
    }

    if (!isMounted.current) {
      isMounted.current = true;
      fetch(
        "https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=50",
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const newCatGifUrls = data.map((item: { url: string }) => item.url);
          setCatGifUrls(newCatGifUrls);

          if (newCatGifUrls.length > 0) {
            const randomImage =
              newCatGifUrls[Math.floor(Math.random() * newCatGifUrls.length)];
            setCat((prevCat) => ({
              ...prevCat,
              randomImage,
            }));
          }
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCat((prevCat) => ({
      ...prevCat,
      [name]: value,
    }));
  }

  function getCatImage() {
    if (catGifUrls.length > 0) {
      const randomNumber: number = Math.floor(
        Math.random() * catGifUrls.length
      );
      const url: string = catGifUrls[randomNumber];
      setCat((prevCat) => ({
        ...prevCat,
        randomImage: url,
      }));
    }
  }

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="formInput"
          name="topText"
          value={cat.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="formInput"
          name="bottomText"
          value={cat.bottomText}
          onChange={handleChange}
        />
        <button className="formButton" onClick={getCatImage} disabled={loading}>
          Get new cat image 🐱
        </button>
      </div>
      <div className="cat">
        {loading && <img src={Loader} alt="Loading..." className="loading" />}
        {!loading && (
          <img src={cat.randomImage} className="catImage" alt="cat" />
        )}
        <h2 className="memeText top">{cat.topText}</h2>
        <h2 className="memeText bottom">{cat.bottomText}</h2>
      </div>
    </div>
  );
};

export default Cat;
