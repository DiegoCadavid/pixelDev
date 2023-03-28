import { createContext } from "react";

interface ISpriteConfigContext {
  fps: number;
}

const spriteConfigContext = createContext<null | ISpriteConfigContext>(null);

export default spriteConfigContext;
