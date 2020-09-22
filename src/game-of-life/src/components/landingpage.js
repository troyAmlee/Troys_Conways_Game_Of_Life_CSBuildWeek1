import React from 'react';
import Grid from './grid'
import './components.css';
import Buttons from './button'

class Landing extends React.Component {
	constructor() {
		super();
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	selectBox = (row, col) => {
        console.log(row, col)
		let gridCopy = arrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
		});
	}

	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
			gridFull: gridCopy
		});
    }
    
    makeSpaceship = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        let i = Math.floor(this.rows/2)
        let j = Math.floor(this.cols/2)
        console.log(i)
        console.log(j)
        gridCopy[13][24] = true
        gridCopy[12][24] = true //28
        gridCopy[12][25] = true
        gridCopy[13][25] = true
        gridCopy[14][26] = true
        gridCopy[14][23] = true
        gridCopy[11][23] = true
        gridCopy[11][22] = true
        gridCopy[11][26] = true
        gridCopy[11][27] = true
        gridCopy[14][28] = true
        gridCopy[15][28] = true
        gridCopy[14][21] = true
        gridCopy[15][21] = true
        gridCopy[17][28] = true
        gridCopy[17][21] = true
        gridCopy[18][22] = true
        gridCopy[18][23] = true
        gridCopy[19][23] = true
        gridCopy[19][24] = true
        gridCopy[19][25] = true
        gridCopy[19][26] = true
        gridCopy[18][26] = true
        gridCopy[18][27] = true
        gridCopy[21][24] = true
        gridCopy[21][25] = true
        gridCopy[22][25] = true
        gridCopy[22][24] = true

		this.setState({
			gridFull: gridCopy
		});
    }

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
    }
    
    stepThrough = () => {
        this.speed = 1000;
        this.playButton();
        setTimeout(() => {
            clearInterval(this.intervalId);
        }, 1000)
    }

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	slow = () => {
		this.speed = 1000;
		this.playButton();
	}

	fast = () => {
		this.speed = 100;
		this.playButton();
	}

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
			generation: 0
		});
	}

	gridSize = (size) => {
		switch (size) {
			case "1":
				this.cols = 20;
				this.rows = 10;
			break;
			case "2":
				this.cols = 50;
				this.rows = 30;
			break;
			default:
				this.cols = 70;
				this.rows = 50;
		}
		this.clear();

	}

	play = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		    if (!g[i][j] && count === 3) g2[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});

	}

	componentDidMount() {
		this.seed();
		this.playButton();
	}

	render() {
		return (
			<div>
				<h1>The Game of Life</h1>
				<Buttons
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					slow={this.slow}
					fast={this.fast}
					clear={this.clear}
					seed={this.seed}
                    gridSize={this.gridSize}
                    stepThrough={this.stepThrough}
                    makeSpaceship={this.makeSpaceship}
				/>
				<Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations: {this.state.generation}</h2>
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default Landing