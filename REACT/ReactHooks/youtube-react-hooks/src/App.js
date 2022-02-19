// // React Hook useReducer

// import React, { useState, useEffect, useReducer } from "react";
// import TodoList from "./TodoList";
// import { Context } from "./context";
// import reducer from "./Reducer";

// export default function App() {

//   const [state, dispatch] = useReducer(
//     reducer,
//     [{}]
//     // JSON.parse(localStorage.getItem("myToto"))
//   );
//   const [todoTitle, setTodoTitle] = useState("");

//   useEffect(() => {
//     localStorage.setItem("myToto", JSON.stringify(state));
//   }, [state]);

//   console.log(state)

//   const addTodo = e => {
//     if (e.key === "Enter") {
//       dispatch({
//         type: "add",
//         payload: todoTitle
//       });
//       setTodoTitle(" ");
//     }
//   };

//   return (
//     <Context.Provider value={{ dispatch }}>
//       <div className="container">
//         <h1>Todo app</h1>

//         <div className="input-field">
//           <input
//             type="text"
//             value={todoTitle}
//             onChange={e => setTodoTitle(e.target.value)}
//             onKeyPress={addTodo}
//           />
//           <label>Todo name</label>
//         </div>

//         <TodoList todos={state} />
//       </div>
//     </Context.Provider>
//   );
// }

//// React Hook useContext

import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { Context } from './context';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    const row = localStorage.getItem('myToto');
    console.log(row);
    setTodos(JSON.parse(row));
  }, []);

  useEffect(() => {
    localStorage.setItem('myToto', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      setTodos([
        ...todos,
        { id: Date.now(), title: todoTitle, completed: false },
      ]);
      setTodoTitle(' ');
    }
  };

  const removTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const togleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{ removTodo, togleTodo }}>
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            onKeyPress={addTodo}
          />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}
