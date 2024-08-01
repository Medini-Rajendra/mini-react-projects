# Mini Projects with React
This repository contains mutliple projects listed under source directory encompassing React functionalities.

## Install Instructions for Tailwindcss
1.`npm install -D tailwindcss postcss autoprefixer`
2.`npx tailwindcss init -p`
3. Modify tailwind.config.js by adding this `content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],` to the existing content
4. Add tailwind directives to CSS (./src/index.css) - `@tailwind base;@tailwind components; @tailwind utilities;`
5. Import the index.css in the App.jsx file. 
