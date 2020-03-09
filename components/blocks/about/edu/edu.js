const Edus = props => {
  return (
    <div className={props.data.formal ? "eduWrapper eduInversed" : "eduWrapper"}>
        <h3 className="eduTitle">{props.data.title}</h3>
      <div className="eduContent">
        <p>
           {props.data.year} - @{props.data.institution}
        </p>
        <a rel="noopener" target="_blank" href={props.data.link}>{props.data.linkName}</a>
      </div>
    </div>
  );
};

export default Edus;
