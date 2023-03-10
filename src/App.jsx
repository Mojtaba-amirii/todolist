import { useState } from "react";
import "./App.css";

let count = 1;

function App() {
  const [list, setList] = useState([{ title: "", done: false, id: 0 }]);
  const [text, setText] = useState();

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleAdd() {
    const todo = {
      title: text,
      done: false,
      id: count++,
    };
    const newList = [...list];
    newList.push(todo);
    setList(newList);
  }

  function handleDone(id, done) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.id == id) {
        item.done = !done;
      }
    }

    setList(newList);
  }

  function handleDelete(id) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.id == id) {
        newList.splice(i, 1);
      }
    }

    setList(newList);
  }

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>

      {list.map((item) => {
        return (
          <div className={item.done && "done"}>
            {item.title} {item.id} {item.done ? "Done" : "Not Done"}
            <button onClick={() => handleDone(item.id, item.done)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => handleDelete(item.id, item.done)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
