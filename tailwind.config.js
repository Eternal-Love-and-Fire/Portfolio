/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img-about": "url('src/assets/avatar-fang-yuan.jpeg')",
        "custom-img-works": "url('src/assets/works.webp')",
        "custom-img-cntcs": "url('src/assets/cntcs.jpg')",
        "custom-img-blogs": "url('src/assets/blogs.jpg')",
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}