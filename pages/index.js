import Head from "next/head";
import Top from "../components/layouts/top";
import Flex from "../components/layouts/flex";
import Menu from "../components/layouts/menu";
import Footer from "../components/layouts/footer";
import Hero from "../components/blocks/home/hero";
import HomePerson from "../components/blocks/home/person";
import Homeintro from "../components/blocks/home/intro";
import Homeoutro from "../components/blocks/home/outro";

const Index = () => (
  <>
    <Top />
    <Head>
      <script key="homejs" async src="/assets/js/home.js"></script>

      <title>Jos De Berdt - Front-end Developer</title>
      <meta name="description" content="The portfolio website (and random thoughts) of Jos De Berdt, a Belgian front-end webdeveloper."/>
    </Head>
    <Flex extraClass="menuFullWidth">
      <Menu />
    </Flex>
    <Hero />
    <Flex>
      <HomePerson />
      <Homeintro />
    </Flex>

    <Flex extraContentClass="smallFlexContent" extraClass="greyWrapper extraMargin25">
      <Homeoutro />
    </Flex>

    <Flex>
      <Footer />
    </Flex>
  </>
);

export default Index;
