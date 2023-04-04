import React, { useState } from "react";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [item, setItem] = useState('');

  const addNewItem = () => {
    let idArr = [];
    
    for (let i = 0; i < toDoList.length; i++) {
      idArr.push(toDoList[i].id);
    };

    setToDoList(toDoList.concat([{id: toDoList.length === 0 ? 1 : Math.max(...idArr) + 1, note: item}]));
    setItem('');
  };

  const taskCompleted = (id) => {
    setToDoList(toDoList.filter(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      };

      return item;
    }));
  };

  const deleteItem = (id) => {
    setToDoList(toDoList.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className="toDoTitle">ToDo List</h1>

      <ul className="toDoList">
        {toDoList.map(item => (
          <li key={item.id} className={`toDoItem  ${item.completed ? 'completed' : ''}`}>
            <input type="checkbox" name="state" onClick={() => taskCompleted(item.id)} />
            <p>{item.note}</p>
            <button onClick={() => deleteItem(item.id)} >
              <img src="../../img/delete.png" alt="" />
            </button>
          </li>
        ))}
      </ul>

      <form className="appForm" action="" method="get">
          <input type="text" id="get_note" value={item} onChange={(e) => setItem(e.target.value)} />
          <button type="button" onClick={() => addNewItem()} >
            <img src="../../img/add.png" alt="" />
          </button>
        </form>
    </div>
  );
};
