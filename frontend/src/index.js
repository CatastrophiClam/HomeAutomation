import React from "react"
import ReactDOM from "react-dom"
import MainView from "./MainView"
import "./index.css"

/*
fetch(`URL/input?key=value&key=value`, {credentials:include, headers{"Content-type": "application/json"}, method: "GET"})
*/

class Main extends React.Component {
    BUTTONS = ["Front Grass", "Back Grass", "Front Lights", "Back Lights", "Front Flower Bed", "Back Flower Bed"]
    SERVER_URL = "http://127.0.0.1:5000/"
    state = {
        buttonStates: [false, false, false, false, false, false]
    }

    handleButtonToggle = (event, button) => {
        let tempState = this.state.buttonStates.slice()
        tempState[this.BUTTONS.indexOf(button)] = !this.state.buttonStates[this.BUTTONS.indexOf(button)]
        fetch(`${this.SERVER_URL}input?component=${button}&state=${tempState[this.BUTTONS.indexOf(button)] ? 1 : 0}`, {
            credentials: "include",
            headers: { "Content-type": "application/json" },
            method: "GET"
        })
            .then(answer => {
                console.log(answer)
                return answer.json()
            })
            .then(answer => {
                console.log(answer)
            })
        this.setState({ buttonStates: tempState })
    }

    render() {
        return <MainView buttons={this.BUTTONS} buttonStates={this.state.buttonStates} handleButtonToggle={this.handleButtonToggle} />
    }
}

ReactDOM.render(<Main />, document.getElementById("root"))
