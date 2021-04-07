import React from 'react';
import TaskBoardColumn from './TaskBoardColumn';
import './TaskBoard.css'

const columns = ["To do", "In Progress", "Needs Review", "Completed"];

export default function TaskBoard(props)
{
    function getTask(id)
    {
        
        return props.alltasks.find((task) => task.id === id);
    }

    function sendBack(id)
    {
        let currentTask = getTask(id);
        let index = columns.findIndex(taskName => currentTask["column"] === taskName);
        if(index > 0)
        {
            currentTask.column = columns[--index];
            props.taskUpdate(currentTask);
        }
    }

    function sendForward(id)
    {
        let currentTask = getTask(id);
        let index = columns.findIndex(taskName => currentTask["column"] === taskName);
        if(index < columns.length - 1)
        {
            currentTask.column = columns[++index];
            props.taskUpdate(currentTask);
        }
    }

    function createBoardColumn(post, prevTxt, nextTxt) 
    {
        return (
          <TaskBoardColumn 
                    id={post.id}
                    type={post.type}
                    title={post.title}
                    column={post.column}
                    backtxt={prevTxt}
                    backClick={() => {sendBack(post.id)}}
                    forwardtxt={nextTxt}
                    forwardClick={() => {sendForward(post.id)}} />
        );
      }
      let forward = "Send task forward >>";
      let back = "<< Send task back";
    const todoCol = props.tasks.toDo.map(post => createBoardColumn(post, null, forward));
    const inProgCol = props.tasks.inProgress.map(post => createBoardColumn(post, back, forward));
    const needsRevCol = props.tasks.needsReview.map(post => createBoardColumn(post, back, forward));
    const complCol = props.tasks.completed.map(post => createBoardColumn(post, back, null));

    return(
        <div className="board">
        <div className="board-column board-column-toDo">
          <h2 className="board-column-title">
            To Do
          </h2>
          <div className="board-column-data">
            {todoCol}
          </div>
        </div>

        <div className="board-column board-column-inProgress">
          <h2 className="board-column-title">
            In Progress
          </h2>
          <div className="board-column-data">
            {inProgCol}
          </div>
        </div>

        <div className="board-column board-column-needsReview">
          <h2 className="board-column-title">
            Needs Review
          </h2>
          <div className="board-column-data">
            {needsRevCol}
          </div>
        </div>

        <div className="board-column board-column-completed">
          <h2 className="board-column-title">
            Completed
          </h2>
          <div className="board-column-data">
            {complCol}
          </div>
        </div>

      </div>
    );
}