import GlobalStyles from "../styles/GlobalStyles";
import "prismjs/themes/prism-okaidia.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
