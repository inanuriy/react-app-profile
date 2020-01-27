import React from "react";

export default function Todolist() {
  return (
    <div>
      <title>TODO List JavaScript</title>
      <h1>TO-DO LIST</h1>
      <div>
        <input
          type="text"
          id="newInput"
          class="addList"
          placeholder="What's up?"
        />
        <span>
          <input
            class="addButton"
            type="button"
            onclick="newElement()"
            value="Add"
          />
        </span>
      </div>
      <ul id="myList"></ul>
    </div>
  );
}
