const { default: prism, Token } = require("prismjs");
const javascript = require("prismjs/languages/prism-javascript").default;
const { getLanguage } = require("prismjs/shared");

async function main() {
  console.log(getLanguage);
  prism.components.add(javascript);
  const tokens = prism.tokenize(
    `var foo = 0;`,
    prism.components.getLanguage("javascript")
  );
  tokens.forEach((token) => {
    if (token instanceof Token && token.type === "number") {
      console.log(`Found numeric literal: ${token.content}`);
    }
  });
}
main();
