import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }


  let postColumns = [];

  posts.forEach((item, index) => {
    if (index % 2) {
      postColumns.push([posts[index - 1], posts[index]]);
    }
  });

  return (
      <div className='row'>
      {postColumns.map(post => (
        <div key={post[0].id} className='column'>
          <div key={post[0].id} className='flex-item'>
            <div>{post[0].title.rendered}</div>
            <div className="post-content">
              {post[0].content.rendered}
            </div>
          </div>
          <div key={post[1].id} className='flex-item'>
            <div>{post[1].title.rendered}</div>
            <div className="post-content">
              {post[1].content.rendered}
            </div>
          </div>
        </div>
      ))}
      </div>
  );
};

export default Posts;