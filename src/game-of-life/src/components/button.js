import React from 'react';
import './components.css';
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';


class Buttons extends React.Component {

	handleSelect = (evt) => {
		this.props.gridSize(evt);
	}

	render() {
		return (
			<div className="center">
				<ButtonToolbar className="buttontoolbar">
					<button className="btn btn-default" onClick={this.props.playButton}>
						Play
					</button>
					<button className="btn btn-default" onClick={this.props.pauseButton}>
					  Pause
					</button>
					<button className="btn btn-default" onClick={this.props.clear}>
					  Clear
					</button>
					<button className="btn btn-default" onClick={this.props.slow}>
					  Slow
					</button>
					<button className="btn btn-default" onClick={this.props.fast}>
					  Fast
					</button>
					<button className="btn btn-default" onClick={this.props.seed}>
					  Randomize
					</button>
                    <button className="btn btn-default" onClick={this.props.stepThrough}>
					  Step Through
					</button>
                    <button className="btn btn-default" onClick={this.props.makeSpaceship}>
                      Make Spaceship
                    </button>
					<DropdownButton
						title="Grid Size"
						id="size-menu"
						onSelect={this.handleSelect}
					>
						<Dropdown.Item eventKey="1">30x20</Dropdown.Item>
						<Dropdown.Item eventKey="2">50x30</Dropdown.Item>
						<Dropdown.Item eventKey="3">70x50</Dropdown.Item>
					</DropdownButton>
				</ButtonToolbar>
			</div>
			)
	}
}

export default Buttons