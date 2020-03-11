const Blogs = props => (
  <div className="blogEntry extraBottomMargin25">
    <div
      className="blogEntryImage"
      style={{ backgroundImage: "url(" + props.data.image + ")" }}
    ></div>
    <div className="blogEntryTextWrap">
        <div className="blogEntryText">
          <h2 className="blogEntryTitle"><a href={"/blog/" + props.data.handle}>{props.data.title}</a></h2>
          <div className="blogEntryDescription"><a href={"/blog/" + props.data.handle}>{props.data.intro}</a></div>
        </div>
        <div className="blogEntryDate"><time dateTime={props.data.pubdate}>{props.data.pubdate}</time></div>
    </div>
  </div>
);

export default Blogs;
