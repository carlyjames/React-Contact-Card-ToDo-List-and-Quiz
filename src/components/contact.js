import React from "react";
import ContactCard from "./ContactCard";



function Main(params) {
    return (
        <div className="contacts">

            <h1>CONTACTS</h1>

            <ContactCard
                contact={{
                    name: "Mr. james",
                    imgUrl: "https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    email: "james@gmail.com",
                    phone: "(234) 959-4345"
                }}

            />
            <ContactCard
                contact={{
                    name: "Mr. larry",
                    imgUrl: "https://images.pexels.com/photos/8152002/pexels-photo-8152002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    email: "larry@gmail.com",
                    phone: "(123) 564-2345"
                }}

            />
            <ContactCard
                contact={{
                    name: "Mr. jago",
                    imgUrl: "https://images.pexels.com/photos/2174723/pexels-photo-2174723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    email: "jago@gmail.com",
                    phone: "(534) 345-2222"
                }}

            />
            <ContactCard
                contact={{
                    name: "Mr. carly",
                    imgUrl: "https://images.pexels.com/photos/2767614/pexels-photo-2767614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    email: "carly@gmail.com",
                    phone: "(123) 123-4567"
                }}

            />
            <ContactCard
                contact={{
                    name: "Mrs. Babe",
                    imgUrl: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600",
                    email: "babe@gmail.com",
                    phone: "(134) 948-4943"
                }}

            />



        </div>
    )



    // return (
    //     <div className="main">
    //         <h1 className="card">HELLO {`${name}`}  WELCOME TO OUR SITE</h1>
    //         <h2 style={styleP}>Good {time} </h2>
    //         <div className="Todo-list">
    //             <TodoItem />
    //             <TodoItem />
    //             <TodoItem />
    //             <TodoItem />
    //         </div>
    //         <p >Enjoy your stay with us</p>

    //     </div>


    // )

}

export default Main