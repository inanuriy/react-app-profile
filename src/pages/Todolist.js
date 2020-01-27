import React, { Component } from "react";
import "./todolist.css";

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      todos: []
    };
  }

  handleChange = event => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { todos, todo } = this.state;

    todos.push(todo);

    this.setState({ todos: todos });
  };

  handleDelete = index => {
    const { todos } = this.state;

    todos.splice(index, 1);

    this.setState({ todos: todos });
  };

  handleEdit = index => {
    const { todos } = this.state;
    const newTodo = prompt("Edit Todo");
    todos.splice(index, 1, newTodo);

    this.setState({ todos: todos });
  };

  render() {
    const { todos, todo } = this.state;
    return (
      <div>
          <h1>TO-DO LIST</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                className="addList"
                type="text"
                id="newInput"
                placeholder="What's up?"
                value={todo}
                onChange={this.handleChange}
              />
              <button type="submit" className="addButton">
                Add Todo
              </button>
            </form>
          </div>
          <ul>
            {todos.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    {item}
                    {/* <div> */}
                    <span
                      onClick={() => this.handleEdit(index)}
                      className="edit"
                    >
                      Edit
                    </span>
                    <span
                      onClick={() => this.handleDelete(index)}
                      className="remove"
                    >
                      X
                    </span>
                    {/* </div> */}
                  </li>
                </div>
              );
            })}
          </ul>
      </div>
    );
  }
}

export default Todolist;
