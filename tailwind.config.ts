
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			'brand':"#1F9FE6",
    'offwhite': '#808080',
    'aboutme':'#4C5863',
    'credentials':"#516E8A",
  		},
      fontFamily: {
  			poppins: ["var(--font-poppins)"],
        inter :["var(--font-inter)"]
  		},
      boxShadow: {
        'custom': '0px 8px 44px 0px rgba(0, 0, 0, 0.27)', // Adding custom box-shadow
      },	
  	}
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
