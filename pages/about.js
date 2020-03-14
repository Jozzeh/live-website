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
          content="The career of Jos De Berdt was not always in front-end development but never strayed to far."
        />
      </Head>
      <Flex extraClass="menuFullWidth">
        <Menu />
        <div className="printContent">Jos De Berdt</div>
      </Flex>
      <Flex extraContentClass="menuShiv">
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
        <Line extraMargin="1"/>
        <Aboutedus />
      </Flex>

      <Flex>
        <Footer />
      </Flex>
    </>
  );
}
