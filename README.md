# Install Tailwind CSS with Create React App

# Creating your project

```base
npx create-react-app my-project
cd my-project
```

# Setting up Tailwind CSS

Tailwind CSS requires Node.js 12.13.0 or higher.

# Install Tailwind via npm

`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`

# Install and configure CRACO

Since Create React App doesn’t let you override the PostCSS configuration
natively, we also need to install CRACO to be able to configure Tailwind:

`npm install @craco/craco`

# After Installed craco

Once it’s installed, update your scripts in your package.json file to use craco
instead of react-scripts for all scripts except eject:

```bash
{
    "scripts": {

    replace these: [
    "start": "react-scripts start",

     "build": "react-scripts build",

     "test": "react-scripts test",
    ]
    to these:
     [
    "start": "craco start",

     "build": "craco build",

     "test": "craco test"
     ],
      "eject": "react-scripts eject"
    },
  }
```

# Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins:

```bash
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

# Create your configuration file

`npx tailwindcss-cli@latest init`

# Configure Tailwind to remove unused styles in production

In your tailwind.config.js file, configure the purge option with the paths to
all of your components so Tailwind can tree-shake unused styles in production
builds:

- purge: [],

* purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']

# Include Tailwind in your CSS

Open the ./src/index.css for my case i'm creating global.css file that Create
React App generates for you by default and use the @tailwind directive to
include Tailwind’s base, components, and utilities styles, replacing the
original file contents:

```base
/* ./src/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
