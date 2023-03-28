import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  backgroundLayers:string[];
  strength: number;
  
}
;

const BackgroundParadax = ({backgroundLayers, strength}: Props) => {
  const [offsetCenterX, setOffsetCenterX] = useState<number>(0);
  const [offsetCenterY, setOffsetCenterY] = useState<number>(0);

  useEffect(() => {
    const handleParadax = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setOffsetCenterX((centerX - mouseX) / centerX);
      setOffsetCenterY((centerY - mouseY) / centerY);
    };

    window.addEventListener("mousemove", handleParadax);

    return () => {
      window.removeEventListener("mousemove", handleParadax);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-[#4e605f] ">
      {backgroundLayers.map((src, i) => (
        <Image
          src={src}
          key={i}
          alt={`Paradax layer${i}`} 
          width={320}
          height={192}
          unoptimized={true}
          unselectable="on"
          className="absolute inset-0 object-cover object-bottom w-full h-full scale-105 rendering-pixelated"
          style={{
            translate: `${strength * i * offsetCenterX}px ${
              strength * i * offsetCenterY
            }px`,
            zIndex: i * -1 + 10,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParadax;
