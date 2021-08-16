import React from "react";
import './App.css';
import './styles/global.css'
import Box from './components/Box'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000



export class App extends React.Component {

  render() {

    return (



      <div className="container-fluid">
        <div className="row">
          <p>
            Water : 
            Heart : {heartMin}
            Temperature : {tempMin}
            Steps : {stepsMin}
          </p>

        
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="favorite" color="red" value={120} unit="bpm" />

          <Box color="yellow" icon="wb_sunny" value={-10} unit="°C" />

          <Box color="black" icon="directions_walk" value="Steps" unit="0" />
        </div>

      </div>


    );
  }
}

export default App;

