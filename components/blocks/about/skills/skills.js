const SkillsRoles = props => {
  let width = props.data.proficiency + "%";
  return (
    <div title={"Proficiency: " + width} className={props.data.isSkill ? "skill" : "role"}>
      <div className="skillName">
        {props.data.name}
      </div>
      <div style={{ width }} className="proficiency">
        &nbsp;
      </div>
    </div>
  );
};

export default SkillsRoles;
