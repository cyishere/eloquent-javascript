import { createGlobalStyle } from "styled-components";
import { COLORS, FONTS } from "./constants";

const GlobalStyles = createGlobalStyle`
  *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${COLORS.bgColor};
  color: ${COLORS.primary};
  line-height: 1.5;
  font-family: Georgia, serif;
  font-size: 1.2rem;
  line-height: 1.5;
}

a:not([class]) {
  color: currentColor;
  border-bottom: 4px solid ${COLORS.yellow};
  text-decoration: none;
  margin-right: 2px;
  margin-left: 2px;
}

:focus {
  outline: 2px dashed;
  outline-offset: 0.25rem;
}

main:focus {
  outline: none;
}

[href]:hover {
  text-decoration: none;
  border-width: 0;
}



.post > * + * {
  margin-top: var(--flow-space, 1em);
}

.post h2,
.post h3,
.post h4 {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
}

.post h1,
.post h2 {
  font-weight: 900;
}

.post h1 {
  font-size: ${FONTS.size700};
}

.post h2 {
  font-size: ${FONTS.size600};
}

.post h3 {
  font-size: ${FONTS.size600};
}

.post img {
  max-width: min(55rem, 100%);
}

.post figcaption {
  font-size: ${FONTS.size300};

  font-style: italic;
  margin-top: 1rem;
}

.post blockquote {
  padding-left: ${FONTS.size600};
  border-left: 5px solid;
  font-family: KaiTi, STKaiti;
}

.post blockquote p:not(:last-child) {
  margin-bottom: 1.5rem;
}

.post p {
  line-height: 1.6;
}

.post ::selection {
  color: ${COLORS.white};
  background: rgba(0, 0, 0, 0.99);
}

.post ol, .post ul {
  margin-left: 2.25rem;
}

.post p,
.post li {
  max-width: 60ch;
}

.post h1 {
  max-width: 15ch;
}

.post h2,
.post h3 {
  max-width: 25ch;
}

.post em:not([class]) {
  color: ${COLORS.red};
  font-style: normal;
}

.post time {
  --flow-space: ${FONTS.size400};
  display: block;
}

.post :is(h2, h3) {
  --flow-space: ${FONTS.size900};
}

.post :is(h2, h3) + * {
  --flow-space: ${FONTS.size400};
}

.post figure,
.post figure + * {
  --flow-space: ${FONTS.size900};
}

.post :not(pre) code {
  background-color: ${COLORS.white};
  margin-left: 2px;
  margin-right: 2px;
  padding: .1em .5em;
  border-radius: .3em;
  color: ${COLORS.blue};
  font-size: .9em;
}
`;

export default GlobalStyles;
