import Head from "next/head";

const SEO = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title} | Eloquent JavaScript（第3版）中文版</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SEO;
