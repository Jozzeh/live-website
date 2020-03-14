import { useRouter } from "next/router";
import articleList from "../../data/blog/articles";

import Head from "next/head";
import Top from "../../components/layouts/top";
import Flex from "../../components/layouts/flex";
import Menu from "../../components/layouts/menu";
import Footer from "../../components/layouts/footer";
import Line from "../../components/layouts/line";
import LineText from "../../components/layouts/linetext";
import Doublecol from "../../components/layouts/doublecol";

import Article from "../../components/blocks/blog/article";

export default function Post() {
  const router = useRouter();
  const articleData = articleList.data.filter(article => {
    if (article.handle === router.query.blogname) {
      return article;
    }
  });

  if (articleData[0]) {
    return (
      <>
        <Top />
        <Head>
          <title>{articleData[0].meta.title}</title>
          <meta name="description" content={articleData[0].meta.description} />
        </Head>
        <Flex extraClass="menuFullWidth">
          <Menu />
        </Flex>
        <article>
          <Flex extraContentClass="menuShiv">
            <h1 className="articleHeading">{articleData[0].title}</h1>
            <LineText txt={<time dateTime={articleData[0].pubdate}>{articleData[0].pubdate}</time>} />
          </Flex>

          <Article articleData={articleData} />
        </article>

        <Flex>
          <Footer />
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Top />
        <Flex extraClass="menuFullWidth">
          <Menu />
        </Flex>
        <Flex>
          <Footer />
        </Flex>
      </>
    );
  }
}
