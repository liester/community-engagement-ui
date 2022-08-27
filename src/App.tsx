import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [engagements, setEngagements] = useState([])
    useEffect(()=>{
        axios.get('https://community-engagement.herokuapp.com/api/engagements')
            .then(({data})=> setEngagements(data.data))
    },[])
  return (
    <div className="App">
      <div>
          Engagements
      </div>
        <div>
            {engagements.map(engagement => <div>{JSON.stringify(engagement)}</div>)}
        </div>

    </div>
  )
}

export default App
