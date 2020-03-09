import Head from "next/head";
import Top from "../components/layouts/top";
import Flex from "../components/layouts/flex";
import Menu from "../components/layouts/menu";
import Footer from "../components/layouts/footer";

export default function About() {
  return (
    <>
      <Top />
      <Head>
        <link async key="homecss" href="/assets/css/home.css" rel="stylesheet" />
        <script key="homejs" async src="/assets/js/home.js"></script>

        <title>Jos De Berdt - Front-end Developer</title>
        <meta name="description" content="The portfolio website (and random thoughts) of Jos De Berdt, a Belgian front-end webdeveloper."/>
      </Head>
      <Flex extraClass="menuFullWidth">
        <Menu />
      </Flex>
      <Flex>
        <Footer />
      </Flex>
    </>
  );
}
