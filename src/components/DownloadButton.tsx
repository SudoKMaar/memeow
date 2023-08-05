import React, { useRef } from "react";

interface DownloadButtonProps {
  onClick: () => void;
  className?: string;
  imageUrl: string;
  topText: string;
  bottomText: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  onClick,
  className,
  imageUrl,
  topText,
  bottomText,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDownload = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 800;

    const ctx = canvas.getContext("2d");

    if (ctx) {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        ctx.drawImage(image, 0, 0, 800, 800);

        ctx.font = "40px Impact";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(topText, 400, 10);

        ctx.textBaseline = "bottom";
        ctx.fillText(bottomText, 400, 790);

        const a = document.createElement("a");
        a.download = "meme.jpg";
        a.href = canvas.toDataURL("image/jpeg", 1.0);
        a.click();
      };
      image.src = imageUrl;
    }
  };

  return (
    <>
      <button className={className} onClick={onClick}>
        Download Meme
      </button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default DownloadButton;
