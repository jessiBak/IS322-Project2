/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TaskBoard from './TaskBoard';
//import {createBoardColumn} from './TaskBoard';
import DropdownMenu from './DropdownMenu';
import './App.css';

function App() 
{
  const [currentColumn, setColumn] = useState("todo");
  const [tasks, setTasks] = useState([]);
  const [categorizedTasks, setCategorizedTasks] = useState(
    {
      toDo: [],
      inProgress: [],
      needsReview: [],
      completed: []
    });

    useEffect(() =>{
      getAllTasks();
    })

    function getAllTasks()
    {
      axios.get(`http://my-json-server.typicode.com/bnissen24/project2DB/posts`).then(response =>
      {
        setTasks(response.data);
        setCategorizedTasks(categorizeTasks(response.data));
      })
    }
    function categorizeTasks(lst)
    {
      return{
        toDo: lst.filter(post => post.column === "todo"),
        inProgress: lst.filter(post => post.column === "in-progress"),
        needsReview: lst.filter(post => post.column === "review"),
        completed: lst.filter(post => post.column === "done"),
      };
    }
  /*
    function dropdownClick()
    {
      setColumn(document.getElementById("columns").value);
    }
    */
    function updateTask(ta)
    {
      let allTasks = tasks;
      const index = allTasks.findIndex(task => task.id === ta.id);
      allTasks[index] = ta;
      const sortedTasks = categorizeTasks(allTasks);
      setCategorizedTasks(sortedTasks);
    }
      getAllTasks();
      /*if(window.innerWidth < 768)
      {
        let forward = "Send task forward >>";
        let back = "<< Send task back";
        const todoCol = categorizedTasks.toDo.map(post => createBoardColumn(post, null, forward));
        const inProgCol = categorizedTasks.inProgress.map(post => createBoardColumn(post, back, forward));
        const needsRevCol = categorizedTasks.needsReview.map(post => createBoardColumn(post, back, forward));
        const complCol = categorizedTasks.completed.map(post => createBoardColumn(post, back, null));
        let currentcol;
          switch(currentColumn)
          {
            case "toDo":
              currentcol = (
                <div className="board-column board-column-toDo">
                  <h2 className="board-column-title">
                    To Do
                  </h2>
                <div className="board-column-data">
                  {todoCol}
                </div>
                </div>
              );
              break;
          case "inProgress":
            currentcol = (
              <div className="board-column board-column-inProgress">
                <h2 className="board-column-title">
                  In Progress
                </h2>
              <div className="board-column-data">
                {inProgCol}
              </div>
              </div>
            );
            break;
          case "needsReview":
            currentcol = (
              <div className="board-column board-column-needsReview">
                <h2 className="board-column-title">
                  Needs Review
                </h2>
                <div className="board-column-data">
                  {needsRevCol}
                </div>
              </div>
            );
            break;
          case "completed":
            currentcol = (
              <div className="board-column board-column-completed">
                <h2 className="board-column-title">
                  Completed
                </h2>
                <div className="board-column-data">
                  {complCol}
                </div>
              </div>
            );
            break;
          default:
            currentcol = (<span></span>);
          }
  
        return(
          <div className="container">
          <DropdownMenu click={dropdownClick}/>
          {currentcol}
          </div>
        );
      }
      else
      {*/
        return (
          <div className="container">
            <TaskBoard tasks={categorizedTasks} alltasks={tasks} taskUpdate={(task) =>updateTask(task)}  />
          </div>
      );
      //}
      
  
}

export default App;