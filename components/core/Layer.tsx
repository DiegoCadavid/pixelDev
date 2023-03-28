import { useEffect, useRef, useState } from "react";

interface Props {
  w: number;
  h: number;
  src: string;
  order: number;
  frame: number;
}

const Layer = ({ w, h, src, order, frame }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      const ctx = canvasRef.current.getContext("2d");

      // Load image
      const image = new Image();
      image.src = src;

      image.onload = () => {
        // Draw image
        if (ctx) {
          ctx.clearRect(0, 0, w, h);
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(image, w * -1 * frame, 0);
        }
      };
    }
  }, [canvasRef, w, h, src, frame]);

  return (
    <canvas
      className="absolute inset-0 object-contain w-full h-full rendering-pixelated"
      style={{
        zIndex: (order + 1) * -1,
      }}
      ref={canvasRef}
      width={w}
      height={h}
    />
  );
};

export default Layer;
