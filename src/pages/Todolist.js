import React, { Component } from "react";

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
              type="text"
              id="newInput"
              placeholder="What's up?"
              value={todo}
              onChange={this.handleChange}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
        <ul style={{width: "300px"}}>
          {todos.map((item, index) => {
            return (
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                key={index}
              >
                <li>{item}</li>
                <div>
                  <span onClick={() => this.handleEdit(index)}>Edit</span>
                  <span onClick={() => this.handleDelete(index)}>X</span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todolist;
