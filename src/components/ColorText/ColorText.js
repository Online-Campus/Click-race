import React, { Component } from 'react';
import './ColorText.css';

const colors = ["green", "blue", "pink"];
const colorstext = ["blue", "pink", "green"];

class ColorText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: 'Blue',
            classcolor: 'pink',
            count: 1,
            next: 1
        };
    }

    startgame = () => {
        this.setState({
            visible: true
        });
        this.started();
    }

    started = () => {
        setInterval (() => {
            if(this.state.count >4){
                this.setState({
                    classcolor: colors[Math.floor((Math.random() * 2) + 0)],
                    text: colors[Math.floor((Math.random() * 2) + 0)],
                    count: 1
                })
            }
            this.setState(prevState => ({
                count: prevState.count + 1
            }), () => {this.setState({
                classcolor: colors[Math.floor((Math.random() * 2) + 0)],
                text: colorstext[Math.floor((Math.random() * 2) + 0)]
            })})
        }, 2000)
    }

    click = () => {
        if(this.state.text === this.state.classcolor){
            this.setState(prevState => ({
                next: prevState.next + 1
            }));
            this.setState({
                count: 0,
            })
        }
        if(this.state.next === 5) {
            this.setState({
                visible: false
            })
        }
    }

    render() {

      return (
        <div>
            {this.state.visible &&
                <div>
                    <div className={`text ${this.state.classcolor}`}>
                        {this.state.text}
                    </div>
                    <div className="box" onClick={this.click}></div>
                </div>
            }
            {!this.state.visible && <button className="button" onClick={this.startgame}>
                Start the game !!!
            </button> }
        </div>
      );
    }
  }

export default ColorText;
