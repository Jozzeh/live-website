import Flex from "../../layouts/flex";

const Article = (props) => {
  const articleData = props.articleData.article;
  return (
    <>
      {articleData.map((piece, i) => {
        if (piece.type === "paragraph") {
          return (
            <Flex key={i} extraContentClass="smallFlexContent">
              <p>{piece.data}</p>
            </Flex>
          );
        } else if (piece.type === "strong-paragraph") {
          return (
            <Flex key={i} extraContentClass="smallFlexContent">
              <p>
                <strong>{piece.data}</strong>
              </p>
            </Flex>
          );
        } else if (piece.type === "link") {
          return (
            <Flex key={i} extraContentClass="smallFlexContent">
              <a
                href={piece.data.link}
                rel="noopener"
                target="_blank"
                className="articleLink"
              >
                {piece.data.text}
              </a>
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
            <Flex key={i} extraContentClass="smallFlexContent">
              <div className="articleUnordenedList">
                <ul>
                  {piece.data.map((listitem, j) => {
                    return <li key={j}>{listitem}</li>;
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
                    <div className="articleImageWrapper">
                      <img
                        key={"-" + j}
                        className="articleImageFlexed"
                        src={image}
                        alt={piece.data.alt}
                      />
                    </div>
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
    </>
  );
};

export default Article;
