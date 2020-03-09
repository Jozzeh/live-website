import blogJson from "../../../data/blog/list";
import Blog from "./blogs";

const Archive = () => (
  <div id="blogList">
    <div id="blogListHeading">Latest</div>
    {blogJson.data.map((row, i) => {
      if (row.featured === 0 || !row.featured) {
        return (<Blog key={i} data={row} />);
      }
    })}
  </div>
);

export default Archive;
