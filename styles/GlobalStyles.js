import { createGlobalStyle } from "styled-components";
import { COLORS, FONTS, SPACING } from "./constants";

const GlobalStyles = createGlobalStyle`
/* ================== RESET =================== */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ================== CUSTOM =================== */

html {
  font-size: 18px;
}

body {
  color: ${COLORS.textPrimary};
  font-family: ${FONTS.primaryFont};
  font-size: ${FONTS.normalFontSize};
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 1px;
  background-color: ${COLORS.grayLighter};
}

a:not([class]) {
  color: currentColor;
  text-decoration: none;
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

/* ====== Post Style ====== */

.post a {
  color: ${COLORS.magenta};
}
.post a:hover {
  border-bottom: 1px solid;
}
.post em {
  font-style: normal;
  font-family: ${FONTS.specialFont};
  font-size: 1.2em;
  border-bottom: 2px dotted ${COLORS.magenta};
}
.post abbr {
  border-bottom: 1px dotted;
  cursor: help;
}
.post cite {
  font-style: ${FONTS.specialFont};
}
.post hr {
  background: ${COLORS.grayLight};
  border: none;
  display: block;
  height: 1px;
  margin-bottom: ${SPACING.m15};
  margin-top: ${SPACING.m15};
}
.post img {
  vertical-align: text-bottom;
}
.post ins {
  background-color: lime;
  text-decoration: none;
}
.post mark {
  background-color: ${COLORS.yellow};
}
.post small {
  font-size: ${FONTS.smallFontSize};
}
.post strong {
  font-weight: 700;
}
.post sub,
.post sup {
  font-size: ${FONTS.smallFontSize};
}
.post sub {
  vertical-align: sub;
}
.post sup {
  vertical-align: super;
}
.post p,
.post dl,
.post ol,
.post ul,
.post blockquote,
.post pre,
.post table {
  margin-bottom: ${SPACING.m15};
}
.post p:last-child,
.post dl:last-child,
.post ol:last-child,
.post ul:last-child,
.post blockquote:last-child,
.post pre:last-child,
.post table:last-child {
  margin-bottom: 0;
}
.post p:empty {
  display: none;
}
.post h1,
.post h2,
.post h3,
.post h4,
.post h5,
.post h6 {
  font-weight: 700;
  line-height: 1.2;
}
.post h1:first-child,
.post h2:first-child,
.post h3:first-child,
.post h4:first-child,
.post h5:first-child,
.post h6:first-child {
  margin-top: 0;
}
.post h1 {
  font-size: ${FONTS.h1FontSize};
  margin-bottom: 0.58333em;
  margin-top: 0.58333em;
  line-height: 1;
}
.post h2 {
  font-size: ${FONTS.h2FontSize};
  margin-bottom: 0.875em;
  margin-top: 1.75em;
  line-height: 1.1;
  padding-bottom: 0.275em;
  border-bottom: 1px solid ${COLORS.grayLight};
}
.post h3 {
  font-size: ${FONTS.h3FontSize};
  margin-bottom: 1.07692em;
  margin-top: 1.07692em;
}
.post h4 {
  font-size: ${FONTS.h4FontSize};
  margin-bottom: 1.16667em;
  margin-top: 1.16667em;
}
.post h5 {
  font-size: ${FONTS.h5FontSize};
  margin-bottom: 1.27273em;
  margin-top: 1.27273em;
}
.post h6 {
  font-size: ${FONTS.normalFontSize};
  margin-bottom: 1.4em;
  margin-top: 1.4em;
}
.post h1 a.anchor-link,
.post h2 a.anchor-link,
.post h3 a.anchor-link,
.post h4 a.anchor-link,
.post h5 a.anchor-link,
.post h6 a.anchor-link {
  color: ${COLORS.lightPurple};
  text-decoration: none;
  display: none;
}
.post h1:hover a.anchor-link,
.post h2:hover a.anchor-link,
.post h3:hover a.anchor-link,
.post h4:hover a.anchor-link,
.post h5:hover a.anchor-link,
.post h6:hover a.anchor-link {
  display: inline;
}
.post dd {
  margin-left: ${SPACING.m15};
}
.post ol,
.post ul {
  list-style-position: outside;
  margin-left: ${SPACING.m15};
}
.post ol {
  list-style-type: decimal;
}
.post ol ol {
  list-style-type: lower-alpha;
}
.post ol ol ol {
  list-style-type: lower-roman;
}
.post ol ol ol ol {
  list-style-type: lower-greek;
}
.post ol ol ol ol ol {
  list-style-type: decimal;
}
.post ol ol ol ol ol ol {
  list-style-type: lower-alpha;
}
.post ul {
  list-style-type: disc;
}
.post ul ul {
  list-style-type: circle;
}
.post ul ul ul {
  list-style-type: square;
}
.post ul ul ul ul {
  list-style-type: circle;
}
.post ul ul ul ul ul {
  list-style-type: disc;
}
.post ul ul ul ul ul ul {
  list-style-type: circle;
}
.post blockquote {
  border-left: 4px solid ${COLORS.textPrimary};
  padding: 0.6em 1.2em;
  font-family: ${FONTS.specialFont};
}

.post kbd,
.post samp {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  background-color: ${COLORS.grayLighter};
  color: ${COLORS.textPrimary};
  font-size: 0.9em;
}
.post code,
.post kbd,
.post samp {
  border-radius: 3px;
  line-height: 1.77778;
  padding: 0.1em 0.4em 0.2em;
  vertical-align: baseline;
}
.post code {
  background-color: ${COLORS.lightPurple};
  margin-left: ${SPACING.m025};
  margin-right: ${SPACING.m025};
}
.post pre {
  overflow: auto;
  padding: 1em 1.2em;
}
.post pre:not([class]) {
  background-color: ${COLORS.grayLighter};
}
.post pre code {
  background: none;
  font-size: 1em;
  line-height: 1em;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}
.post figure {
  margin-bottom: 2.8em;
  text-align: center;
}
.post figure:first-child {
  margin-top: 0;
}
.post figure:last-child {
  margin-bottom: 0;
}
.post figcaption {
  font-size: 0.8em;
  margin-top: 0.875em;
}
.post table {
  width: 100%;
}
.post table pre {
  white-space: pre-wrap;
}
.post th,
.post td {
  font-size: 1em;
  padding: 0.7em;
  border: 1px solid #e6e6e6;
  line-height: 1.4;
}
.post thead tr,
.post tfoot tr {
  background-color: #f5f5f5;
}
.post thead th,
.post thead td,
.post tfoot th,
.post tfoot td {
  font-size: 0.9em;
  padding: 0.77778em;
}
.post thead th code,
.post thead td code,
.post tfoot th code,
.post tfoot td code {
  background-color: #fff;
}
.post tbody tr {
  background-color: #fff;
}

`;

export default GlobalStyles;
