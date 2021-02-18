import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Main from './components/Main'



function App() {
  const [nasaData, getNasaData] = useState({})

  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=aaW8iViA2MVle3RaEeOwedhn9e8bY2SKFUeceL6j')
    .then(res =>
      getNasaData(res.data))
    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <div>
      {<Main nasaData = {nasaData} />}
    </div>
  )
}

export default App;
