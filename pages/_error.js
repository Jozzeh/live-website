import Head from "next/head";
import Top from "../components/layouts/top";
import Flex from "../components/layouts/flex";
import Menu from "../components/layouts/menu";
import Footer from "../components/layouts/footer";
import Line from "../components/layouts/line";
import LineText from "../components/layouts/linetext";
import Doublecol from "../components/layouts/doublecol";

function Error({ statusCode }) {
  if (statusCode) {
    return (
      <>
        <Top />
        <Head>
          <link
            async
            key="errorcss"
            href="/assets/css/error.css"
            rel="stylesheet"
          />

          <title>{statusCode} Error - Jos De Berdt</title>
          <meta
            name="description"
            content="An error has occurred..."
          />
        </Head>
        <Flex extraClass="menuFullWidth">
          <Menu />
        </Flex>
        <div className="errorWrapper">
          <div className="errorContent">
            <h1 className="errorTitle">{statusCode}</h1>
            <div className="errorDescription">
              <h2 className="errorH2">
                {statusCode === 404
                  ? "This page could not be found."
                  : "An error has occurred..."}
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
