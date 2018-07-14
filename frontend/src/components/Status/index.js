import React from "react"
import ReactDOM from "react-dom"
import StatusView from "./StatusView"
import "./index.css"

class Status extends React.Component {
    render() {
        return <StatusView buttons={this.props.buttons} buttonStates={this.props.buttonStates} handleButtonToggle={this.props.handleButtonToggle} />
    }
}

export default Status
