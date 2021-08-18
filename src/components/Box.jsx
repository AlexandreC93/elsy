import React from "react";



export class Box extends React.Component {


    render() {

        return (
            <div className=" box col-sm-3 col-6">

                <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}> {this.props.icon}  </span>

                {this.props.value}={this.props.unit}
                
                {this.props.unit !== "L" &&
                    <input type="range"  onChange={this.props.onChange}  min={this.props.min} max={this.props.max}></input>
                } 
                

                



            </div>
        )
    }
}





export default Box;

