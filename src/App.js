import React from "react";
import './App.css';
import './styles/global.css'
import Box from './components/Box.jsx'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000




export class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        water: 1.5,
        heart: 120,
        temperature: -10,
        steps: 3000
    }
  }

  onHeartChange = (e) =>{
    console.log(e.target.value)
      this.setState({
        heart: e.target.value
      }
           
      )
      this.calculateWater()
  }

  onTempChange = (e) =>{
    console.log(e.target.value)
      this.setState({
        temperature: e.target.value
      }
           
      )
      this.calculateWater()
  }


  onStepChange = (e) =>{
    console.log(e.target.value)
      this.setState({
        steps: e.target.value
      }
           
      )
      this.calculateWater()
  }

  calculateWater = () => {
    let litre = 1.5
      if (this.state.temperature >= 20  ){
        litre += 0.02 * (this.state.temperature - 20 )
      }  
      if (this.state.steps >= 10000){
       litre +=0.00002 * (this.state.steps - 10000)
      }  
      if (this.state.heart >= 120 ){
       litre +=  0.0008 * (this.state.heart - 120)
      }

      this.setState(
       {
         water: litre 
        }
      )
  }

  render() {
    

    return (



      <div className="container-fluid">
        <div className="row">
        
            
        

        
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L"/>
          <Box icon="favorite" min={heartMin} max={heartMax} color="red" value={this.state.heart} unit="bpm" onChange={this.onHeartChange} />

          <Box color="yellow" min={tempMin} max={tempMax} icon="wb_sunny" value={this.state.temperature} unit="°C" onChange={this.onTempChange} />

          <Box color="black" min={stepsMin} max={stepsMax} icon="directions_walk" value={this.state.steps} unit="Steps" onChange={this.onStepChange} />
        </div>

      </div>


    );
  }
}

export default App;

