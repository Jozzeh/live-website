const Flex = props => (
  <div style={props.flexStyle ? props.flexStyle : {}} className={props.extraClass ? props.extraClass + " flexContainer" : "flexContainer"}>
    <div style={props.contentStyle ? props.contentStyle : {}} className={props.extraContentClass ? props.extraContentClass + " flexContent" : "flexContent"}>
      {props.children}
    </div>
  </div>
);

export default Flex;
