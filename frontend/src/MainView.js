import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Status from "./components/Status"

class MainView extends React.Component {
    render() {
        return <Status buttons={this.props.buttons} buttonStates={this.props.buttonStates} handleButtonToggle={this.props.handleButtonToggle} />
    }
}

export default MainView
