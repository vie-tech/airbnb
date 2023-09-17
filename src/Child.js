 import React, {Component} from "react"
 import "./counter.css"

 class Child extends React.Component{
     constructor(){
         super()

         this.state={
             number:0
         }
     }

     add=()=>{
        this.setState({number: this.state.number +1})
     }

     subtract=()=>{
         this.setState({number: this.state.number -1})
     }

     reset=()=>{
         this.setState({number: 0})
     } 

     render(){
         return <div>
             <p>{this.state.number}</p>
             <button onClick={this.add}>ADD 1</button>
             <button onClick={this.reset}>RESET</button>
             <button onClick={this.subtract}>SUBTRACT 1</button>
         </div>
     }
 }

 export default Child