import { Token as TokenType } from "prismjs/src/core.ts";

let { Prism, Token } = await import("prismjs/src/core.ts");
let { default: javascript } = await import("prismjs/src/languages/prism-javascript.ts");

const prism = new Prism();
prism.components.add(javascript);

const tokens = prism.tokenize(
  `var foo = 0;`,
  prism.components.getLanguage("javascript")!
);

tokens.forEach((token: TokenType | string) => {
  if (token instanceof Token && token.type === "number") {
    console.log(`Found numeric literal: ${token.content}`);
  }
});
