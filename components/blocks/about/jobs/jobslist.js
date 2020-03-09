import jobsJson from '../../../../data/cv/jobs';
import Jobs from './jobs';

const Aboutjobs = () => (
  <div id="aboutJobs" className="extraBottomMargin25">
    <h2 id="aboutJobsTitle">
      Career
    </h2>
    <div id="aboutJobsText">
    {jobsJson.data.map((row, i) =>
      <Jobs key={i} data={row}/>
    )}
    </div>
  </div>
);

export default Aboutjobs;
