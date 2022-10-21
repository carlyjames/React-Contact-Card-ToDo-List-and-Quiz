import React from "react"
import Todo from "./components/Todo"
import Nav from "./components/Nav"
import Contact from "./components/contact"


import Joke from "./components/Joke"
import JokesData from "./components/JokesData"

import TodoItem from "./components/TodoItem"
import todoData from "./components/todoData"





// function MyApp() {
//     const jokeComponent = JokesData.map(joke => <Joke key={Joke.id} question={joke.question} punchline={joke.punchline} />)
//     const todocomponent = todoData.map(item => <TodoItem key={item.id} item={item} />)
//     return (
//         <div>
//             <Nav />
//             <Contact />
//             {jokeComponent}
//             {todocomponent}
//         </div>
//     )
// }

// classes

class MyApp extends React.Component {
    render() {
    const jokeComponent = JokesData.map(joke => <Joke key={Joke.id} question={joke.question} punchline={joke.punchline} />)
    const todocomponent = todoData.map(item => <TodoItem key={item.id} item={item} />)
        return(
            <div>
                <div>
                     <Nav />
                     <Contact />
                     {jokeComponent}
                     {todocomponent}
                </div>
            </div>
        )
    }
}

export default MyApp