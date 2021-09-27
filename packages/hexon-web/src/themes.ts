import { hex, rgb } from "color-convert";
import { createTheme } from "@winwin/vue-global-theming";

type modifier = "l" | "a" | "d";
type amount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type ModifiedColor = {
  [key in `${modifier}${amount}`]: string;
};

type modifyFn = (name: string, amt: number) => string;
type modifierFnMap = { [key in modifier]: modifyFn };

const modifiers: modifierFnMap = {
  l: (name, amt) => {
    // 变白
    const [r, g, b] = hex.rgb(name);
    const go = (c: number) => c + Math.abs(255 - c) * amt;
    return `#${rgb.hex([go(r), go(g), go(b)])}`;
  },
  d: (name, amt) => {
    // 变黑
    const [r, g, b] = hex.rgb(name);
    const go = (c: number) => c * (1 - amt);
    return `#${rgb.hex([go(r), go(g), go(b)])}`;
  },
  a: (name, amt) => {
    // 变透明
    const alpha = Math.round((1 - amt) * 255).toString(16);
    return `${name}${alpha}`;
  },
};

function createColor(name: string): ColorPack {
  const indexs = new Array(9).fill(0).map((v, i) => (i + 1) / 10);
  function createModifiedColor(type: modifier) {
    return indexs
      .map((amt) => modifiers[type](name, amt))
      .reduce((o, v, idx) => {
        o[`${type}${(idx + 1) as amount}`] = v;
        return o;
      }, {} as ModifiedColor);
  }
  return {
    n: name,
    ...createModifiedColor("a"),
    ...createModifiedColor("d"),
    ...createModifiedColor("l"),
  };
}

type ColorPack = ModifiedColor & {
  n: string;
};

export type HTheme = {
  color: {
    primary: ColorPack;
    success: ColorPack;
    warning: ColorPack;
    error: ColorPack;
    common: ColorPack;
    folder: string;
    all: string;
    post: string;
    page: string;
    draft: string;
    background: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      9: string;
    };
    foreground: {
      1: string;
      2: string;
      3: string;
      6: string;
      9: string;
    };
  };
};

export const blueTheme: HTheme = {
  color: {
    primary: createColor("#3498db"),
    success: createColor("#27ae60"),
    warning: createColor("#f39c12"),
    error: createColor("#e74c3c"),
    common: createColor("#888888"),
    folder: "#f3c04f",
    all: "#27ae60",
    post: "#3883c7",
    page: "#52bad1",
    draft: "#f1c40f",
    background: {
      1: "#ffffff",
      2: "#f8f8f8",
      3: "#eeeeee",
      4: "#dfdfdf",
      5: "#cdcdcd",
      9: "#282828",
    },
    foreground: {
      1: "#000000",
      2: "#484848",
      3: "#000000",
      6: "#9e9e9e",
      9: "#ffffff",
    },
  },
};

export default createTheme({ default: blueTheme });