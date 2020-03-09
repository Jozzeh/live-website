import eduJson from '../../../../data/cv/edu';
import Edu from './edu';

const Aboutedulist = () => (
  <div id="aboutEdu">
    <h2 id="aboutEduTitle">
      Education <span className="small grey"> *outside of learning every day</span>
    </h2>
    <div id="aboutEduText">
    {eduJson.data.map((row, i) =>
      <Edu key={i} data={row}/>
    )}
    </div>
  </div>
);

export default Aboutedulist;
