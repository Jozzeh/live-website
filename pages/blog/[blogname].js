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
          <link
            async
            key="blogcss"
            href="/assets/css/blog.css"
            rel="stylesheet"
          />

          <title>{articleData[0].meta.title}</title>
          <meta name="description" content={articleData[0].meta.description} />
        </Head>
        <Flex extraClass="menuFullWidth">
          <Menu />
        </Flex>

        <Flex extraContentClass="menuShiv">
          <h1 className="articleHeading">{articleData[0].title}</h1>
          <LineText txt={articleData[0].pubdate} />
        </Flex>

        {articleData[0].article.map((piece, i) => {
          if (piece.type === "paragraph") {
            return (
              <Flex key={i} extraContentClass="smallFlexContent">
                <p>{piece.data}</p>
              </Flex>
            );
          } else if (piece.type === "strong-paragraph") {
            return (
              <Flex key={i} extraContentClass="smallFlexContent">
                <p><strong>{piece.data}</strong></p>
              </Flex>
            );
          } else if (piece.type === "link") {
            return (
              <Flex key={i} extraContentClass="smallFlexContent">
                <a href={piece.data.link} rel="noopener" target="_blank" className="articleLink">{piece.data.text}</a>
              </Flex>
            );
          } else if (piece.type === "heading") {
            return (
              <Flex key={i} extraContentClass="smallFlexContent">
                <h2 className="articleSubTitle">{piece.data}</h2>
              </Flex>
            );
          } else if (piece.type === "quote") {
            return (
              <Flex key={i} extraContentClass="smallFlexContent">
                <blockquote className="articleQuote">{piece.data}</blockquote>
              </Flex>
            );
          } else if (piece.type === "image-portrait") {
            return (
              <Flex key={i} extraContentClass="smallFlexContent">
                <div className="articleImageWrap">
                  <img
                    className="articleImagePortrait"
                    src={piece.data.link}
                    alt={piece.data.alt}
                  />
                  <div className="articleImageText">{piece.data.alt}</div>
                </div>
              </Flex>
            );
          } else if (piece.type === "unordened-list") {
            return (
              <Flex key={i}  extraContentClass="smallFlexContent">
                <div className="articleUnordenedList">
                  <ul>
                  {piece.data.map((listitem, j) => {
                    return (
                      <li key={j}>{listitem}</li>
                    );
                  })}
                  </ul>
                </div>
              </Flex>
            );
          } else if (piece.type === "image-gallery") {
            return (
              <Flex key={i}>
                <div className="articleImageFlex">
                  {piece.data.imgs.map((image, j) => {
                    return (
                      <img
                        key={"-" + j}
                        className="articleImageFlexed"
                        src={image}
                        alt={piece.data.alt}
                      />
                    );
                  })}
                </div>
                <div className="articleImageText">{piece.data.alt}</div>
              </Flex>
            );
          } else if (piece.type === "image-landscape") {
            return (
              <Flex key={i}>
                <div className="articleImageWrap">
                  <img
                    className="articleImageLandscape"
                    src={piece.data.link}
                    alt={piece.data.alt}
                  />
                  <div className="articleImageText">{piece.data.alt}</div>
                </div>
              </Flex>
            );
          }
        })}

        <Flex>
          <Footer />
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Top />
        <Head>
          <link
            async
            key="blogcss"
            href="/assets/css/blog.css"
            rel="stylesheet"
          />
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
}
