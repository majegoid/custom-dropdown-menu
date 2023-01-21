# clean and re-create modules folder
rm -rf modules
mkdir modules
# babel transpile the module into "babel-output.js"
npx babel src/createDropdown.js > modules/babel-output.js
# minify the "babel-output.js" into "index.js"
uglifyjs modules/babel-output.js --compress --mangle -o "modules/index.js"
# minify the css that the component that's created will depend on
npx postcss src/styles/index.css > modules/index.css
# remove unnecessary files
rm modules/babel-output.js