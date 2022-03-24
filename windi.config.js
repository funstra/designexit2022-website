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
      "primary-perm": withOpacityValue("--primary-perm"),
      "accent-perm": withOpacityValue("--accent-perm"),
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
      "2xl": "var(--step-4)",
    },
    spacing: {
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      l: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      s2xl: "var(--space-s-2xl)",
    },
    boxShadow: {
      xs: "0 0 0.5rem 0.25rem hsl(var(--accent) / 0.02)",
      s: "0 0 0.65rem 0.3rem hsl(var(--accent) / 0.06)",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          lineHeight: "1.5",
          "font-family": "forma-djr-text,sans-serif",
          "font-style": "normal",
        },
        p: { fontSize: "var(--step-0)", fontWeight: "300" },
        a: { fontSize: "var(--step-0)", fontWeight: "500" },
        button: { fontSize: "var(--step-0)", fontWeight: "300" },
        h1: { lineHeight: "1", fontSize: "var(--step-3)", fontWeight: "800" },
        h2: { lineHeight: "1", fontSize: "var(--step-3)", fontWeight: "800" },
        h3: { lineHeight: "1", fontSize: "var(--step-2)", fontWeight: "500" },
      });
    }),
  ],
};
