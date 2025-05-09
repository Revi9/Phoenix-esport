/** @type {import('tailwindcss').Config} */
export default {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./node_modules/tw-elements/js/**/*.js"

  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "1px 0px 5px #28D3DA",

        ]
      },
      transitionF: {
        transition: [
          'opacity 500ms',
        ]
      }
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }
      }
    },
    animation: {
      typing: "typing 3s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/plugin.cjs")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#28D3DA",
          "secondary": "#ffffff",


        },
      },

    ],
  },
}

