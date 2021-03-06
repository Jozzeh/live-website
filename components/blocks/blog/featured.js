import Bloglist from "../../../data/blog/list";
import Doublecol from "../../../components/layouts/doublecol";

const Featured = () => {
  /* foreach to run through the list only once */
  let feat1 = {};
  let feat2 = {};
  Bloglist.data.forEach(element => {
    if (element.featured === 1) {
      feat1 = element;
    } else if (element.featured === 2) {
      feat2 = element;
    }
  });

  return (
    <div id="featured">
      <div id="featuredHeading">Popular</div>
      <Doublecol columnClass="twoThird">
        <a href={"/blog/" + feat1.handle}>
          <div id="featuredFirst" >
            <img src={feat1.image} alt={"Image of the article - " + feat1.title} />
            <div className="featuredText">
              <h2 className="featuredTitle">{feat1.title}</h2>
              <div className="featuredIntro">{feat1.intro}</div>
              <div className="featuredPubDate"><time dateTime={feat1.pubdate}>{feat1.pubdate}</time></div>
            </div>
          </div>
        </a>
        <a href={"/blog/" + feat2.handle}>
          <div id="featuredSecond">
          <img src={feat2.image} alt={"Image of the article - " + feat2.title} />
            <div className="featuredText">
              <div className="featuredTitle">{feat2.title}</div>
              <div className="featuredIntro">{feat2.intro}</div>
              <div className="featuredPubDate"><time dateTime={feat2.pubdate}>{feat2.pubdate}</time></div>
            </div>
          </div>
        </a>
      </Doublecol>
    </div>
  );
};

export default Featured;
