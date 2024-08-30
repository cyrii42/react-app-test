// import PelotonMonthData from "./PelotonMonthData.jsx"

// export default function App() {
//   return (
//     <><h1>Zach's Peloton Chart?</h1>
//     <PelotonMonthData /></>
//   )
// }

import { useState, useEffect } from "react";
import axios from "axios";

export default function PelotonMonthData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://pelotondata.cyrii42.net/month_table")
      .then(response => {
        // handle success
        console.log('asodifhasodifhasodifh');
        console.log(response.data);
        // update state
        setPosts(response.data);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <p key={index}>{post.month} {post.days}: {post.total_hours}</p>
      ))}
    </div>
  );
}