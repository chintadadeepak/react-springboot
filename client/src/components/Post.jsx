import React from "react";

function Post({ post, key }) {
  return (
    <div key={key}>
      <h3>Profile : {post.profile}</h3>
      <p>Description : {post.description}</p>
      <p>Experience : {post.experience}</p>
      Skills :
      {post.skills.map((skill, key) => {
        return (
          <div key={key}>
            <p>{skill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
