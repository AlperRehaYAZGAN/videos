import { registerRoot } from "remotion";
import {
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { Main } from "./MyComp/Main";
import { RemotionRoot } from "./Root";

export {
  DURATION_IN_FRAMES,
  Main as MyComposition,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
};

registerRoot(RemotionRoot);
