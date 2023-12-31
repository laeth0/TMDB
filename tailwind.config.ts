import type { Config } from 'tailwindcss'

const config: Config = {
    //? important: true,  //-The important option lets you control whether or not Tailwind’s utilities should be marked with !important. This can be really useful when using Tailwind with existing CSS that has high specificity selectors.To generate utilities as !important, set the important key in your configuration options to true
    // Alternatively, you can make any utility important by adding a ! character to the beginning:
    //<p class="font-bold !font-medium" >
    //This will be medium even though bold comes later in the CSS.
    //</p>
    // --------------------------------------------------------------------------
    mode: "jit",
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        debugScreens: {
            position: ['bottom', 'left'],
        },
        container: {
            center: true,
        },
        screens: {
            xs: { max: "576px" },
            sm: "576px",
            // => @media (min-width: 576px) { ... }
            md: "768px",
            // => @media (min-width: 768px) { ... }
            lg: "992px",
            // => @media (min-width: 992px) { ... }
            xl: "1200px",
            // => @media (min-width: 1200px) { ... }
            xxl: "1400px",
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            colors: {
                scrollerGrey: "var(--scrollerGrey)",
                lightGrey: "var(--lightGrey)",
                darkerGrey: "var(--darkerGrey)",
                tmdbDarkBlue: "var(--tmdbDarkBlue)",
                tmdbLightBlue: "var(--tmdbLightBlue)",
                tmdbLighterGreen: "var(--tmdbLighterGreen)",
                tmdbLightGreen: "var(--tmdbLightGreen)",
                tmdbLogoGreen: "var(--tmdbLogoGreen)",
                tmdbLogoOrange: "var(--tmdbLogoOrange)",
                tmdbLogoRed: "var(--tmdbLogoRed)",
                accountSilver: "var(--accountSilver)",
                accountPink: "var(--accountPink)",
                accountPurple: "var(--accountPurple)",
                accountGreen: "var(--accountGreen)",
                accountTeal: "var(--accountTeal)",
                accountLightBlue: "var(--accountLightBlue)",
                accountBlue: "var(--accountBlue)",
                accountOrange: "var(--accountOrange)",
                accountYellow: "var(--accountYellow)",
                accountRed: "var(--accountRed)",
            },
            fontFamily: {
                global: ["var(--font-source-sans-3)", "sans-serif"],
            },
            borderRadius: {
                imageBorderRadius: "8px"
            },
            backgroundImage: {
                "CaruselImage": "url(/Carusel_BG.svg)",
                'headerImage': "linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url(/header.jpg)",
                "LighterGreen-to-Green": "linear-gradient(to right,rgba(192, 254, 207,1) 0%,rgba(30, 213, 169,1) 100%)",
                "LighterGreen-to-LightBlue": "linear-gradient(to right,rgba(30, 213, 169,1) 0%,rgba(1, 180, 228,1) 100%)",
                "yellow-to-blue": "linear-gradient(to right,#c0fecf 0,#1ed5a9 100%)",
                "Orange-to-Red": "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)",
            },
            keyframes: {
                show: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                ShowElements: 'show 1s ease-in-out',
            }
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ]
}
export default config
