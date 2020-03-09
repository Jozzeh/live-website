const Jobs = props => {
  return (
    <div className="jobsWrapper">
      <div className="jobsHeader">
        <div className="jobsYear">{props.data.year}</div>
        <h3 className="jobsTitle">{props.data.title}</h3>
        <div className="jobsCompany">@ {props.data.company}</div>
      </div>
      <div className="jobsContent">
        <div className="jobsResponsibility">
          <div className="jobsResponsibilityTitle">Responsibilities</div>
          <div className="jobsResponsibilityText">
            <p>{props.data.responsibilities}</p>
          </div>
        </div>
        <div className="jobsTech">
          <div className="jobsTechTitle">Tech - Stack</div>
          <div className="jobsTechText">
            {props.data.tech.map((row, i) => (
              <div key={i} className="techstack">
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
