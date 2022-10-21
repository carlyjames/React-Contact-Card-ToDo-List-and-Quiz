import React from "react";


import TodoItem from "./TodoItem";
import todoData from "./todoData";


function Footer() {
    const name = "CARLY"
    const date = new Date()
    const hour = date.getHours()
    let time
    const styleP = {
        fontSize: 24,

    }

    if (hour < 12) {
        time = "morning ✨"
        styleP.color = '#8da399'
    } else if (hour >= 12 && hour < 17) {
        time = "afternoon 🔆"
        styleP.color = '#ffd27f'
    } else {
        time = "night 💤"
        styleP.color = "#131862"
    }
      
    
    const todocomponent = todoData.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <div className="footer">
            <h1 className="card">HELLO {`${name}`}  WELCOME TO MY TODO LIST</h1>
            <h2 style={styleP}>Good {time} </h2>

            {todocomponent}
            
            <p >Enjoy your stay with us</p>
        </div>
    )
}

export default Footer