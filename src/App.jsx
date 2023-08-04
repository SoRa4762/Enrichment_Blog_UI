import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      }).then((response) => console.log(response));
    }
  }

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

          <div className="Update_Section">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="inputField"
            ></textarea>
            <div className="group_btn">
              <button className="Btn">Update</button>
              <button className="Btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
