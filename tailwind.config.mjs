/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "med-blue": "#039CD5",
                blue: "#0183B3",
                cyan: "#00C4D1",
                "sky-blue": "#E1F9FF",
                green: "#34C565",
                "highlight-green": "#3ED973",
                yellow: "#F6C94F",
                "trans-blue": "#EEFCFF",
                "trans-blue-2": "#EBF9F0",
                "dark-blue": "#014158",
            },
        },
    },
    plugins: [],
};
