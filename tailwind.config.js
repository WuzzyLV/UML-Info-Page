import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      accent1: "#A53F4F",
      accent2: "#FAD9D5",
    },
    extend: {},
  },
  plugins: [],
});
