import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

const css = `
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
`;

postcss([tailwindcss])
  .process(css, { from: undefined })
  .then((result) => {
    console.log(result.css);
  });
