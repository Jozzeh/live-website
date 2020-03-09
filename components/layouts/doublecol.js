const Doublecol = props => (
  <div className="flexContainer flexContainerPerc">
    <div className={props.columnClass ? "leftColumn " + props.columnClass : "leftColumn"}>
      {props.children[0]}
    </div>
    <div className={props.flexEnd ? "rightColumn flexEnd" : "rightColumn"}>
      {props.children[1]}
    </div>
  </div>
);

export default Doublecol;
