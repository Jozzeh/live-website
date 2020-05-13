import Head from "next/head";
import Top from "../components/layouts/top";
import Flex from "../components/layouts/flex";
import Menu from "../components/layouts/menu";
import Footer from "../components/layouts/footer";
import Line from "../components/layouts/line";
import Doublecol from "../components/layouts/doublecol";

import Aboutintro from "../components/blocks/about/intro";
import Aboutskillsroles from "../components/blocks/about/skills/skillsroles";
import Aboutjobs from "../components/blocks/about/jobs/jobslist";
import Aboutedus from "../components/blocks/about/edu/edulist";

export default function About() {
  return (
    <>
      <Top />
      <Head>
        <title>Professional career - Jos De Berdt</title>
        <meta
          name="description"
          content="Read about the career of Jos De Berdt and how he grew from 
          webdeveloper to full stack to front-end developer & architect."
        />
      </Head>
      <Flex extraClass="menuFullWidth">
        <Menu />
        <div className="printContent">Jos De Berdt</div>
      </Flex>
      <Flex extraID="content" extraContentClass="menuShiv">
        <Doublecol flexEnd="1" columnClass="twoThird">
          <Aboutintro />
          <div className="centered">
            <img
              loading="lazy"
              src="/assets/imgs/jos-de-berdt.jpg"
              alt="Jos De Berdt"
            />
          </div>
        </Doublecol>
      </Flex>

      <Flex extraClass="greyWrapper extraMargin25">
        <Aboutskillsroles />
      </Flex>

      <Flex>
        <Aboutjobs />
        <Line extraMargin="1" />
        <Aboutedus />
      </Flex>

      <Flex>
        <Footer />
      </Flex>
    </>
  );
}
