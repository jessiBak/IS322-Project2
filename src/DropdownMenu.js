import React from 'react';

export default function DropdownMenu(props)
{

    return(
        <div>
            <label for="columns">Select a Column:</label>
                <select id="columns" className="dropdown">
                    <option value="toDo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="needsReview">Needs Review</option>
                    <option value="completed">Completed</option>
                </select>
                <button type="button" onClick={() => props.click}>Submit</button>
        </div>
    );
}