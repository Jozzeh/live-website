import skillJson from '../../../../data/cv/skills';
import Skills from './skills';

const Aboutskillsroles = () => (
  <div id="aboutSkills">
    <h2 id="aboutSkillsTitle">
      Skills & roles
    </h2>
    <div id="aboutSkillsText">
    {skillJson.data.map((row, i) =>
      <Skills key={i} data={row}/>
    )}
    </div>
  </div>
);

export default Aboutskillsroles;
