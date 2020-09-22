import React from 'react';
import './components.css';

class Gridnode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.keynow,
            is_on: false,
            color: "white",
            has_neighbors: 0
        }
        this.flip_switch = (props) => {
            if(this.state.is_on === false){
                this.setState({is_on: true})
                this.setState({color: "red"})
                
            }
            else if(this.state.is_on === true){
                this.setState({is_on: false})
                this.setState({color: "white"})
            }   
            
            
            // if(this.state.is_on === false){
            //     this.setState({color: "white"})
            // } 
            // else if (this.state.is_on === true){
            //     this.setState({color: "red"})
            // }
            
        }
        
    }

    // componentDidMount = (props) => {
    //     console.log(this.state)
    // }

    render() {
        return (
            
            <div 
            className = "gridnode"
            onClick = {() => {this.flip_switch()}}
            
            style = {{backgroundColor: this.state.color}}
            ></div>
            
        )
    }
}

export default Gridnode