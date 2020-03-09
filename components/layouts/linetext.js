const LineText = props => (
  <div className={props.extraMargin ? "lineFlex extraBottomMargin25" : "lineFlex"}>
    <div className="lineWrap">
      <hr className="fullLine"/>
    </div>
    <div className="lineText">
      {props.txt}
    </div>
    <div className="lineWrap">
      <hr className="fullLine"/>
    </div>
  </div>
);

export default LineText;