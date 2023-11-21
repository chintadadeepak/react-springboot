import axios from "axios";
import React, { useEffect, useState } from "react";
// import Post from "../components/Post";
import "../styles/hiretalent.css";
function HireTalent() {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await axios.get("http://localhost:8080/allPosts");
        setPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const searchPosts = async () => {
      try {
        const data = await axios.get(
          `http://localhost:8080/posts/${searchPost}`
        );
        setPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchPost.length === 0) fetchPosts();
    else searchPosts();
  }, [searchPost]);

  return (
    <div className="hiretalent-container">
      <h2 className="heading">Hire-Talent</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Enter Profile name or Skills or city name.."
        onChange={(event) => {
          setSearchPost(event.target.value);
        }}
      />
      {posts.map((post, key) => {
        return (
          <div className="post-container" key={key}>
            <h3 className="post-heading">Profile : {post.profile}</h3>
            <p className="post-description">Description : {post.description}</p>
            <p className="post-experience">
              Experience : {post.experience} years
            </p>
            <p>Skills :</p>
            {post.skills.map((skill, key) => {
              return (
                <div className="skills-container" key={key}>
                  <p>::- {skill}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default HireTalent;
