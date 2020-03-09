const Blogs = props => (
  <div className="blogEntry extraBottomMargin25">
    <div
      className="blogEntryImage"
      style={{ backgroundImage: "url(" + props.data.image + ")" }}
    ></div>
    <div className="blogEntryTextWrap">
      <a href={"/blog/" + props.data.handle}>
        <div className="blogEntryText">
          <h2 className="blogEntryTitle">{props.data.title}</h2>
          <div className="blogEntryDescription">{props.data.intro}</div>
        </div>
        <div className="blogEntryDate">{props.data.pubdate}</div>
      </a>
    </div>
  </div>
);

export default Blogs;
