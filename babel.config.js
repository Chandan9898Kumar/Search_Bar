module.exports = {
  presets: ['@babel/preset-env','@babel/preset-react'],
  plugins: ["prettier"],
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "react-scripts/node_modules/babel-eslint"
};


