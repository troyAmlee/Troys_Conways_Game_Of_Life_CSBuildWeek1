import React from 'react';
import NodeGrid from './grid'
import './components.css';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generations: 0
        }
    }
    render() {
        return (
            <div className = "landing">
                <div className = "conway_header">
                    <h1>Conway's Game of Life</h1>
                </div>
                <div className = "generations_header">
                    <h1>Generation : {this.state.generations}</h1>
                    <NodeGrid/>
                </div>
                <div className = "rules">
                    <h2>Rules</h2>
                    <li>
                        <ul>In the Game of Life, these rules examine each cell of the grid. For each
                            cell, it counts that cell's eight neighbors (up, down, left, right, and
                            diagonals), and then act on that result.
                        </ul>
                        <ul>
                            If the cell is alive **and** has 2 or 3 neighbors, then it remains
                            alive. Else it dies.
                        </ul>
                        <ul>
                            If the cell is dead **and** has exactly 3 neighbors, then it comes to
                            life. Else if remains dead.
                        </ul>
                    </li>
                </div>
            </div>
        );
    }
}

export default Landing