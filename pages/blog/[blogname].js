import Head from "next/head";
import Top from "../../components/layouts/top";
import Flex from "../../components/layouts/flex";
import Menu from "../../components/layouts/menu";
import Footer from "../../components/layouts/footer";
import LineText from "../../components/layouts/linetext";

import Article from "../../components/blocks/blog/article";

function Post({ articleContent }) {
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

// Post.getInitialProps = async (ctx) => {
//   const articleData = articleList.data.filter(article => {
//     if (article.handle === ctx.query.blogname) {
//       return article;
//     }
//   });

//   if (!articleData[0] || typeof articleData[0] === 'undefined') {
//     return {
//       error: {
//         statusCode: 404
//       }
//     };
//   }

//   return {
//     articleContent: articleData[0],
//   };
// };

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    process.env.BASE_URL +
      "/data/blog/articles.json"
  );
  const articleList = await res.json();

  const articleData = articleList.data.filter((article) => {
    if (article.handle === context.query.blogname) {
      return article;
    }
  });

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articleContent: articleData[0],
    },
  };
}

export default Post;
