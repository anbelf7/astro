#!/bin/zsh

echo -n "Nome progetto: "
read progetto
# mkd $progetto

# Installo Astro
npm create astro@latest $progetto -- --template minimal -n --install --git 
cd $progetto

echo "Aggiungo React..."
npx astro add react -y

echo "Aggiungo Tailwind..."
npx astro add tailwind -y

echo "Configuro Prettier e plugins..."
echo '{"plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],"pluginSearchDirs": false}' > .prettierrc
echo "node_modules/**" > .prettierignore
npm i -D prettier prettier-plugin-astro prettier-plugin-tailwindcss

echo "Installo Shadcn/ui..."
# Creo file globals.css
mkdir src/styles
touch src/styles/globals.css
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/styles/globals.css

# Modifico file astro.config.mjs
sed -i '' '/tailwind()/ s/tailwind()/tailwind({ applyBaseStyles: false })/' astro.config.mjs

# Modifico file tsconfig.json
sed -i '' '/"jsxImportSource": "react"/s/$/,/' tsconfig.json && \
sed -i '' '/"jsxImportSource": "react",/a\
\    "baseUrl": ".",\
\    "paths": {\
\      "@/*": ["./src/*"]\
    }' tsconfig.json

npx shadcn@latest init -d  

echo -n "Aggiungere login? [s/N]: "
read login
echo "Modifico file Astro..."
case $login in
s|S)
  npx degit https://github.com/anbelf7/astro.git#login --force
  # Modifico file astro.config.mjs
  sed -i '' '/defineConfig({/a\
  \  output: "server",
  ' astro.config.mjs
  npm i pocketbase
  npx shadcn@latest add button card input label
  ;;
n|N|"")
  npx degit https://github.com/anbelf7/astro.git --force
  ;;
esac

echo "Modifico file .gitignore"
sed -i '' '/\.env\.production/a\
\  .env.local
' .gitignore
sed -i '' '$a\
\  astroInit.sh
' .gitignore

# Avvio VSCode
code .
npm run dev -- --host