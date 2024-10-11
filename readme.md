### TWO WAYS OF CREATING REACT PROJECT
> 1. npx create-react-app test-app
 - 
 - 
 - 


> 2. vite create vite@latest
 - it will ask project name: test-app
 - cd test-app
 - npm install
 - npm run dev

### FOR INTEGRATING TAILWIND INTO OUR PROJECT
> - npm install -D tailwindcss postcss autoprefixer
> - npx tailwindcss init -p
> - Create a new CSS file (e.g., src/index.css) and add the following Tailwind directives:
  - @tailwind base;
  - @tailwind components;
  - @tailwind utilities; 
> - Open the tailwind.config.js file and configure the content array to include your React files:
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
    extend: {},
    },
    plugins: [],
    };
