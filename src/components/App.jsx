import "modern-normalize";
import Articles from "./Articles/Articles";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((res) => setArticles(res.data.hits));
  }, []);

  return (
    <div>
      <Articles articles={articles} />
    </div>
  );
};

export default App;
