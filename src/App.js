import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


const App = ()=>{
    const [Loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () =>{

    const respnse = await fetch(url)
    const tours = await respnse.json()
  }
  
  // }
  return <h2>Tours Project Setup</h2>
}

export default App
