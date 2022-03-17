// @ts-check - enable TS check for js file
import plugin from "windicss/plugin";

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`;
    }
    return `hsl(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import("vite-plugin-windicss").WindiCssOptions} */
export default {
  attributify: {
    prefix: "w:",
  },
  theme: {
    colors: {
      primary: withOpacityValue("--primary"),
      accent: withOpacityValue("--accent"),
      ternary: withOpacityValue("--ternary"),
    },
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1200px",
      xl: "1500px",
    },
    fontSize: {
      "2xs": "var(--step--2)",
      xs: "var(--step--1)",
      s: "var(--step-1)",
      l: "var(--step-2)",
      xl: "var(--step-3)",
    },
    spacing: {
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      l: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          lineHeight: "1",
          "font-family": "forma-djr-text,sans-serif",
          "font-style": "normal"
        },
        p: { fontSize: "var(--step-0)", fontWeight: "300" },
        h1: { fontSize: "var(--step-3)", fontWeight: "800" },
        h2: { fontSize: "var(--step-3)", fontWeight: "800" },
        h3: { fontSize: "var(--step-2)", fontWeight: "500" },
      });
    }),
  ],
};
