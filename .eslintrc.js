module.exports = {
   "root": true,
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
      tsconfigRootDir: __dirname,
      "project": ["./tsconfig.json"]
   },
   "plugins": ["@typescript-eslint"],
   "extends": [
      "eslint:recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
   ],
   "rules": {
      "@typescript-eslint/explicit-function-return-type": [
         "error",
         {
            "allowExpressions": true
         }
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unused-vars": [
         "error",
         {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
         }
      ],
      "prefer-promise-reject-errors": "error",
      //"prettier/prettier": 0,
      "prettier/prettier": [
         "error",
         {
           "endOfLine": "auto"
         }
       ]
   }
};
