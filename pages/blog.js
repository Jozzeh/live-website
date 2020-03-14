import Head from "next/head";
import Top from "../components/layouts/top";
import Flex from "../components/layouts/flex";
import Menu from "../components/layouts/menu";
import Footer from "../components/layouts/footer";
import LineText from "../components/layouts/linetext";
import Doublecol from "../components/layouts/doublecol";

import Featured from "../components/blocks/blog/featured";
import Archive from "../components/blocks/blog/archive";
import Random from "../components/blocks/blog/random";

export default function Blog() {
  return (
    <>
      <Top />
      <Head>
        <title>Articles from a front-end dev - Jos De Berdt</title>
        <meta
          name="description"
          content="The random thoughts and articles from Jos De Berdt, a front-end webdeveloper with full stack knowledge."
        />
      </Head>
      <Flex extraClass="menuFullWidth">
        <Menu />
      </Flex>

      <div id="content" className="greyWrapper greyWrapperNoBottom menuShiv">
        <Flex>
          <h1 id="blogIntroHeading">Article archive</h1>
          <LineText extraMargin={1} txt="in front-end experience"/>
          <Featured />
        </Flex>
      </div>

      <Flex>
        <Doublecol columnClass="twoThird">
          <Archive />
          <Random />
        </Doublecol>
      </Flex>

      <Flex>
        <Footer />
      </Flex>
    </>
  );
}
