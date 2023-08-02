import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

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
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="inputField"
            ></textarea>
            <button className="Btn">Add</button>
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
