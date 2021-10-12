import React, { FC } from "react";
import { useState, ChangeEvent } from "react";
import { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  return (
    <div>
      <div className="header">
        <input
          type="text"
          placeholder="enter task.."
          value={task}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            setTask(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const newTask = { taskName: task };
            setTodoList([...todoList, newTask]);
            setTask("")
            console.log(todoList);
          }}
        >
          add task
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task:ITask,key:number)=>{
          return <TodoTask key={key} task={task}/>
        })}
      </div>
    </div>
  );
};

export default App;
