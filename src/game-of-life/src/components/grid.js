import React from 'react';
import Gridnode from './gridnode'
import './components.css';



class NodeGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 40,
            height: 40,
            nodes: [],
            buffer: []
        }
    }
    
    render_node_row = (props) => {
        let row = []
        let count = 0
        for(let i = 0; i < (this.state.width * this.state.height); i++){
            row.push(<Gridnode
                        keynow = {count}
                        />)
            count = count + 1
        }
        return row
    }
    
    
    componentDidMount() {
        this.setState(function(state, props) {
            return {
              nodes: this.render_node_row()
            };
          });
    }

    todoItems = () => this.state.nodes.map((todo, index) =>
    // Only do this if items have no stable IDs
    <div className = "gridnode" key={index}>
        {todo}
    </div>
);
    
    render() {
        console.log(this.todoItems())
        
        return (
            <div 
            className = "grid" 
            style = {{height: (10*this.state.height), width: (10*this.state.width)}}
            >
                {this.todoItems()}
            </div>
        )
    }
}

export default NodeGrid