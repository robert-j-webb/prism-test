import { Prism, Token } from 'prismjs';
import javascript from 'prismjs/languages/prism-javascript';

const prism = new Prism();
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
