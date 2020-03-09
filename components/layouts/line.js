const Line = props => (
  <div className="dottedFlex">
    <hr className={props.extraMargin ? "dottedLine extraBottomMargin25" : "dottedLine"}/>
  </div>
);

export default Line;