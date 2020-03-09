import RandomList from "../../../data/blog/random";
import { useState, useEffect } from "react";

const Random = () => {
  const randomNumbers = 6;
  const [randomPage, setRandomPage] = useState(1);
  const [activeRandoms, setActiveRandoms] = useState(
    RandomList.data.slice(0, randomNumbers)
  );

  useEffect(() => {
    if ((randomPage * randomNumbers) - randomNumbers < RandomList.data.length && randomPage !== 0) {
      const lowerBorder = randomPage === 1 ? 0 : randomNumbers * randomPage - randomNumbers;
      const upperBorder = randomPage === 1 ? randomNumbers : randomNumbers * randomPage;
      setActiveRandoms(RandomList.data.slice(lowerBorder, upperBorder));
    }
  }, [randomPage]);

  return (
    <div id="blogRandom">
      <div id="blogRandomHeading">Random</div>
      <div id="blogRandomText">
        {activeRandoms.map((row, i) => {
          return (
            <div key={i} className="randomList">
              <div className="randomListText">{row.txt}</div>
              <div className="randomListExtra">
                {row.pubdate} - {row.tech}
              </div>
            </div>
          );
        })}
        <div className="blogRandomPagination">
          <button className="blogRandomPager" onClick={() => {setRandomPage(randomPage - 1 ? randomPage - 1 : 1)}}> &lt; </button>
          <span className="blogRandomPage">{" " + randomPage + " "}</span>
          <button className="blogRandomPager" onClick={() => {setRandomPage((randomPage * randomNumbers) < RandomList.data.length ? randomPage + 1 : randomPage)}}> &gt; </button>
        </div>
      </div>
    </div>
  );
};

export default Random;
