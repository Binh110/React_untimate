import { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo1", name: "whatching youtube" },
    { id: "todo2", name: "using facebook" },
    { id: "todo3", name: "reading book " },
  ]);
  console.log("check data ", listTodo);
  const handleClickBtn = (event, msg) => {
    console.log(">>> run inside handlclick", name);
  };
  return (
    <div>
      <label>Name</label>
      <input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={(event) => {
          handleClickBtn(event, "buttonsadjksoajd");
        }}
      >
        submit
      </button>
      <br />
      <br />
      Hello Todo list with name= {name}
      <div>List Todo: </div>
      {listTodo.map((item, index) => {
        return (
          <div id={item.id} key={index}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
