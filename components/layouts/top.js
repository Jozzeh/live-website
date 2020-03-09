import Head from "next/head";

const Top = () => (
  <Head>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta key="httpEquiv" http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta key="author" name="author" content="Jos De Berdt" />
    <meta key="robots" name="robots" content="index, follow" />
    <meta key="googlebot" name="googlebot" content="noodp" />

    <meta
      name="msapplication-TileImage"
      content="/assets/imgs/jos-windows-icon.png"
    />
    <link
      rel="shortcut icon"
      href="/assets/imgs/jos-favicon.png"
      type="image/x-icon"
    />
    <link rel="apple-touch-icon" href="/assets/imgs/jos-iphone-icon.png" />
    <link rel="icon" href="/assets/imgs/jos-favicon.png" type="image/x-icon" />

    <link
      async
      key="robotofont"
      href="https://fonts.googleapis.com/css?family=Roboto:300, 400&display=swap"
      rel="stylesheet"
    />
    <link key="resetcss" href="/assets/css/reset.css" rel="stylesheet" />
    <link key="commoncss" href="/assets/css/common.css" rel="stylesheet" />
  </Head>
);

export default Top;
