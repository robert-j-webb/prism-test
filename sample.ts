import prism, { Token } from "prismjs";
import javascript from "prismjs/languages/prism-javascript";
import { getLanguage } from "prismjs/shared";

async function main() {
  console.log(getLanguage);
  prism.components.add(javascript);
  const tokens = prism.tokenize(
    `var foo = 0;`,
    prism.components.getLanguage("javascript")!
  );
  tokens.forEach((token: Token | string) => {
    if (token instanceof Token && token.type === "number") {
      console.log(`Found numeric literal: ${token.content}`);
    }
  });
}
main();
