import Head from "next/head";
import Top from "../../components/layouts/top";
import Flex from "../../components/layouts/flex";
import Menu from "../../components/layouts/menu";
import Footer from "../../components/layouts/footer";
import LineText from "../../components/layouts/linetext";

import Article from "../../components/blocks/blog/article";
import Articles from "../../data/blog/list.json";
import ArticleDetails from "../../data/blog/articles.json";


function Post(props) {
  const articleContent = props.page;
  if (articleContent) {
    return (
      <>
        <Top />
        <Head>
          <title>{articleContent.meta.title}</title>
          <meta name="description" content={articleContent.meta.description} />

          <meta property="og:title" content={articleContent.meta.title} />
          <meta
            property="og:description"
            content={articleContent.meta.description}
          />
        </Head>
        <Flex extraClass="menuFullWidth">
          <Menu />
        </Flex>
        <article id="content">
          <Flex extraContentClass="menuShiv">
            <h1 className="articleHeading">{articleContent.title}</h1>
            <LineText
              txt={
                <time dateTime={articleContent.pubdate}>
                  {articleContent.pubdate}
                </time>
              }
            />
          </Flex>

          <Article articleData={articleContent} />
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

export async function getStaticPaths() {
  const paths = Articles.data.map(page => {
    const blogname = page.handle;
    return {params: {blogname}};
  });
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  var lastItem = params.blogname;
  const page = ArticleDetails.data.find(page => page.handle === lastItem) || {notfound: true};
  return {props: {page}};
}

export default Post;
