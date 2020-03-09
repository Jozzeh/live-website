const Homeintro = () => (
  <>
    <h2 id="homeIntroHeading">Where do I use JavaScript?</h2>
    <div id="homeIntro">
      <div className="homeIntroContent panel" id="homeIntroLeft">
        <div className="homeIntroTitle">Server</div>
        <div className="homeIntroList">
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Adonis</li>
            <li>PM2</li>
            <li>RTC / Sockets</li>
          </ul>
        </div>
      </div>
      <div className="homeIntroContent panel" id="homeIntroMid">
        <div className="homeIntroTitle">Browser</div>
        <div className="homeIntroList">
          <ul>
            <li>Native JavaScript</li>
            <li>EcmaScript (ES6)</li>
            <li>NextJs</li>
            <li>React</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>Service Workers</li>
          </ul>
        </div>
      </div>
      <div className="homeIntroContent panel" id="homeIntroRight">
        <div className="homeIntroTitle">Desktop / Mobile</div>
        <div className="homeIntroList">
          <ul>
            <li>React Native</li>
            <li>Electron</li>
            <li>Node-Red</li>
            <li>CLI tools</li>
            <li>Proton native</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Homeintro;
