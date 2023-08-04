import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(function () {
    fetch("http://localhost:8000/blog")
      .then((response) => response.json())
      .then((data) => setAllBlogs(data));
  }, []);

  function setBlogTitle(event) {
    setTitle(event.target.value);
  }

  function setBlogContent(event) {
    setContent(event.target.value);
  }

  function onAddButtonClick(event) {
    if (!(title && content)) {
      alert("Title or content cannot be empty!");
    } else {
      fetch("http://localhost:8000/blog", {
        method: "POST",
        body: JSON.stringify({ title: title, content: content }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            alert("Blog added successfully!");
          } else {
            alert("Blog failed to be added");
          }
        });
    }
  }

  console.log(allBlogs);

  return (
    <>
      <div className="App">
        <div className="Header">
          <div className="letters">
            <p>C</p>
            <p>R</p>
            <p>U</p>
            <p>D</p>
          </div>
          <div className="logos">
            <p>➕</p>
            <p>👀</p>
            <p>✏️</p>
            <p>🗑️</p>
          </div>
        </div>
        <div className="CRUD_Section">
          <div className="Add_Section">
            <input
              type="text"
              className="inputField"
              placeholder="Blog Title..."
              value={title}
              onChange={setBlogTitle}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="inputField"
              placeholder="Blog Content..."
              value={content}
              onChange={setBlogContent}
            ></textarea>
            <button className="Btn" onClick={onAddButtonClick}>
              Add
            </button>
          </div>
          <div className="display_all_blog">
            {allBlogs.map(function (blog) {
              return (
                <div key={blog._id} className="blog">
                  <h2>{blog.title}</h2>
                  <p>{blog.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
