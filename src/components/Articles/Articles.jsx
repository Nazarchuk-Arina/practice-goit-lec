const Articles = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((post) => (
          <li key={post.objectID}>{post.tile}</li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
