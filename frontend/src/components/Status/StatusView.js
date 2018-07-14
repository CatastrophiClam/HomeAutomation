import React from "react"
import ReactDOM from "react-dom"
import { Switch } from "@blueprintjs/core"
import "./index.css"

class SelectionButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault()
        this.props.handleClick(this.props.text)
    }

    render() {
        return (
            <button disabled={this.props.state} onClick={event => this.handleClick(event)}>
                {this.props.text}
            </button>
        )
    }
}

class StatusView extends React.Component {
    drawSelector(state, handleClick, text) {
        return (
            <div className="switch-panel">
                <Switch checked={state} label={text} onChange={event => handleClick(event, text)} />
            </div>
        )
    }

    render() {
        return (
            <div className="main-panel">
                <div>
                    <h3>Status</h3>
                </div>
                {this.props.buttons.map((item, index) => {
                    return this.drawSelector(this.props.buttonStates[index], this.props.handleButtonToggle, item)
                })}
            </div>
        )
    }
}

export default StatusView
