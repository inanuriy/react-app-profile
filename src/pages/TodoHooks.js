// import React, { useState } from "react";

// function Todo({ todo, index, editTodo, removeTodo }) {
//   return (
//     <div>
//       {todo.text}
//       <div>
//         <button onClick={() => editTodo(index)}>Edit</button>
//         <button onClick={() => removeTodo(index)}>x</button>
//       </div>
//     </div>
//   );
// }

// function TodoForm({ addTodo }) {
//   const [value, setValue] = useState("");

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={value}
//         onChange={event => setValue(event.target.value)}
//       />
//     </form>
//   );
// }

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       text: "Pay bills"
//     },
//     {
//       text: "Do homework"
//     },
//     {
//       text: "Party"
//     }
//   ]);

//   const addTodo = text => {
//     const newTodos = [...todos, { text }];
//     setTodos(newTodos);
//   };

//   const editTodo = index => {
//     const newTodo = prompt("Edit Todo");

//     const editTodo ={ text: newTodo}
//     console.log(editTodo)
//     todos.splice(index, 1, editTodo);
//     setTodos([...todos]);
//   };

//   const removeTodo = index => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     //   {console.log(todos)}
//     <div>
//       <TodoForm addTodo={addTodo} />
//       <div>
//         {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             editTodo={editTodo}
//             removeTodo={removeTodo}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

export default function TodoHooks() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo("");
  };

  const handleDelete = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const handleEdit = index => {
      const newTodo = prompt("Edit Todo");
      todos.splice(index, 1, newTodo);
      setTodos([...todos]);
  };

  return (
    <div>
      <h1>TODO LIST HOOKS</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="input"
          onChange={handleChange}
          value={todo}
          name={todo}
        />
        <button>Submit</button>
      </form>
      <div>
        {todos.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <span onClick={() => handleEdit(index)}>Edit</span>
            <span onClick={() => handleDelete(index)}>x</span>
          </div>
        ))}
      </div>
    </div>
  );
}
