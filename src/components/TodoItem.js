import React from "react";

function TodoItem(props) {
    return (
        <div className="Todo-item">
            <label className="container">
                <input type="checkbox" checked={props.item.completed}/>
                <span className="checkmark"></span>
                <p>{props.item.text}</p>
            </label>  
        </div>
    )
}

export default TodoItem