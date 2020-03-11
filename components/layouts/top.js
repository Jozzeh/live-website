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

    <link rel="apple-touch-icon" sizes="57x57" href="/assets/imgs/icons/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/imgs/icons/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/imgs/icons/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/imgs/icons/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/imgs/icons/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/imgs/icons/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/imgs/icons/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/imgs/icons/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/imgs/icons/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/imgs/icons/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/imgs/icons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/imgs/icons/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/imgs/icons/favicon-16x16.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/assets/imgs/icons/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>

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
