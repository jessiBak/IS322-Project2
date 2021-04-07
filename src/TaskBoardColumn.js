import React from 'react';

function RenderButton(props)
{
        return(
            <div>
                <button type="button" onClick={() => props.click(props.id, props.type)} > { props.txt } </button>
            </div>
        );
    
    
}

export default function TaskBoardColumn(props)
{
    return(
            <div>
                <div>
                    <h4>
                        { props.title }
                    </h4>
                    <div>
                        <div>ID: {props.id }</div>
                        <div>Type: {props.type }</div>
                        <RenderButton id={props.id} type={props.column} txt={props.forwardtxt} click={props.forwardClick} />
                        <RenderButton id={props.id} type={props.column} txt={props.backtxt} click={props.backClick} />
                    </div>
                </div>
            </div>
    )
}

