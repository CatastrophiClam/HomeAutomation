import React from "react"
import ReactDOM from "react-dom"
import MainView from "./MainView"
import "./index.css"

/*
fetch(`URL/input?key=value&key=value`, {credentials:include, headers{"Content-type": "application/json"}, method: "GET"})
*/

class Main extends React.Component {
    BUTTONS = ["Front Grass", "Back Grass", "Front Lights", "Back Lights", "Front Flower Bed", "Back Flower Bed"]
    BUTTON_SQL_NAMES = ["FrontGrass", "BackGrass", "FrontLights", "BackLights", "FrontFlowerbed", "BackFlowerbed"]
    SERVER_URL = "http://192.168.5.83:5000/"
    state = {
        buttonStates: [false, false, false, false, false, false]
    }

    handleButtonToggle = (event, button) => {
        let tempState = this.state.buttonStates.slice()
        tempState[this.BUTTONS.indexOf(button)] = !this.state.buttonStates[this.BUTTONS.indexOf(button)]
        fetch(
            `${this.SERVER_URL}input?component=${this.BUTTON_SQL_NAMES[this.BUTTONS.indexOf(button)]}&state=${tempState[this.BUTTONS.indexOf(button)] ? 1 : 0}`,
            {
                method: "GET"
            }
        )
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
