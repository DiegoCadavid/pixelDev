import { useState } from "react";
import Sprite from "../core/Sprite";

// CODE EXAMPLE TO NICOLE

interface Props {}

interface parts {
  [key: string]: {
    src: string;
    show: boolean;
  };
}

const defaultValues: parts = {
  mask: {
    src: "/assets/character/mask.png",
    show: true,
  },
  decoration: {
    src: "/assets/character/decorationHair.png",
    show: true,
  },
  pants: {
    src: "/assets/character/pants.png",
    show: true,
  },
  shirt: {
    src: "/assets/character/short.png",
    show: true,
  },
  hair: {
    src: "/assets/character/hair.png",
    show: true,
  },
};

const ButtonExample = ({
  name,
  handleToggle,
  parts,
}: {
  name: string;
  handleToggle: (key: string) => void;
  parts: parts;
}) => {
  return (
    <button
      onClick={() => {
        handleToggle(name);
      }}
      className={`rounded-md px-4 py-2  ${
        parts[name].show ? "bg-slate-200" : "bg-slate-400"
      }`}>
      {name}
    </button>
  );
};

const Player = ({}: Props) => {
  const [parts, setParts] = useState<parts>(defaultValues);

  const handleToggle = (key: string) => {
    const { [key]: part, ...data } = parts;
    setParts({
      [key]: {
        src: part.src,
        show: !part.show,
      },
      ...data,
    });
  };

  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-2 -mr-8">
        <p className="font-bold text-center text-white">Nicole Example! ^^</p>
        {Object.keys(parts)
          .sort()
          .map((key) => (
            <ButtonExample
              key={key}
              parts={parts}
              handleToggle={handleToggle}
              name={key}
            />
          ))}
      </div>
      <div className="h-[400px] w-[400px]">
        <Sprite
          h={64}
          w={32}
          layers={[
            ...Object.keys(parts)
              .filter((key) => {
                return parts[key].show === true;
              })
              .map((key) => {
                return parts[key].src;
              }),
            "assets/character/face.png",
            "/assets/character/player.png",
          ]}
          layersRows={4}
          onPlay={true}
        />
      </div>
    </div>
  );
};

export default Player;
