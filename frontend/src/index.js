import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SelectionButton extends React.Component{
	
    constructor(props){
	super(props);
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
	event.preventDefault();
	this.props.handleClick(this.props.text);
    }

    render(){
	return <button disabled = {this.props.state} onClick = {(event) => this.handleClick(event)}>{this.props.text}</button>
    }
}

class Main extends React.Component{
    
    constructor(props){
	super(props);
	this.state = {
	    BUTTONS: ["Front Grass", "Back Grass", "Front Lights", "Back Lights"],
	    buttonStates: [false, false, false, false],
	}
	this.handleButtonToggle = this.handleButtonToggle.bind(this);
    }

    handleButtonToggle(button){
	console.log(button);
	let tempState = this.state.buttonStates.slice();
	tempState[this.state.BUTTONS.indexOf(button)] = !this.state.buttonStates[this.state.BUTTONS.indexOf(button)];
	this.setState({buttonStates: tempState});
    }
    
    render(){
	return(
	    this.state.BUTTONS.map((item, index) => {
		return(
		    <SelectionButton
			state = {this.state.buttonStates[index]}
			key = {index}
			handleClick = {this.handleButtonToggle}
			text = {item}
		    />
		)
	    })
	)
    }
}


ReactDOM.render(<Main/>, document.getElementById('root'));

