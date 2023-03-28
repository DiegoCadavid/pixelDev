import { useContext, useEffect, useRef, useState } from "react";
import useInterval from "../../hooks/useInterval";

import spriteConfigContext from "../../context/spriteConfigContext";
import { ILayer } from "../../global/types";
import Layer from "./Layer";

interface Props {
  w: number;
  h: number;
  speed?: number;
  layersRows: number;
  layers: string[];
  onPlay: boolean;
}

const Sprite = ({ w, h, layers,  layersRows, onPlay, speed = 1 }: Props) => {
  const [frame, setFrame] = useState<number>(0);
  const spriteConfigCtx = useContext(spriteConfigContext);

  useInterval(() => {
    if (onPlay && layers.length > 0 && layersRows > 1) {
      setFrame((f) => {
        if (f == layersRows - 1) {
          return 0;
        }

        return f + 1;
      });
    }
  }, (1000 / (spriteConfigCtx?.fps || 6))/speed);

  return (
      <div
        className="relative w-full h-full">
        {layers.map((layer, i) => (
          <Layer key={i} h={h} w={w} order={i} frame={frame} src={layer} />
        ))}
      </div>
  );
};

export default Sprite;
