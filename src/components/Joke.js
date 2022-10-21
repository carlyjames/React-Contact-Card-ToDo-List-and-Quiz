import React from "react";

function Joke(props) {
    return(
        <div className="joke-card">
            <h3
              style={{display: !props.question && "none"}}
            > <span>Question</span> : {props.question}</h3>
            <br></br>
            <h3
            style={{color: !props.question && "#888888"}}
            >Answer : {props.punchline}</h3>
        </div>
    )
}

export default Joke