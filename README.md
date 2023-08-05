# Memeow - Cat Meme Generator

Memeow is a simple React application that allows you to generate cat-themed memes with customizable top and bottom text. You can have fun creating hilarious cat memes and download them to share with your friends and family.

## Demo

You can see a live demo of Memeow [here](https://memeow.netlify.app).

## Features

- Fetches cat GIF URLs from "The Cat API" to provide a variety of cat images for memes.
- Allows users to enter custom top and bottom text for the meme.
- Generates memes with text overlay and downloads them as JPEG images.
- Simple and intuitive user interface.

## Installation

Follow these steps to run Memeow on your local machine:

1. Clone this repository:

   ```bash
   git clone https://github.com/SudoKMaar/memeow.git
   cd memeow
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Set up your API Key:
   - Memeow fetches cat GIF URLs from "The Cat API," which requires an API key.
   - Obtain your API key by signing up at "https://thecatapi.com/" and create an environment variable `REACT_APP_CAT_API_KEY` with your API key.

## Usage

After you have completed the installation steps, you can start the development server using the following command:

```bash
npm start
```

The application will be accessible at `http://localhost:3000` in your web browser.

To use Memeow:

1. Enter the desired text in the "Top text" and "Bottom text" input fields.
2. Click the "Get new cat image 🐱" button to generate a random cat meme with the entered text.
3. You can keep clicking the button to get different cat images with the same text or change the text as you like.
4. To download a generated meme, click the "Download Meme" button below the generated meme.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- The Cat API: An API that provides cat images and information.
- HTML5 Canvas: For drawing the text on the generated meme images.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of Memeow, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
