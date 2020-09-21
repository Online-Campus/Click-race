import React, { Component } from 'react';
import { COLORS } from '../utils/utils'
import './color_game.css';

class ColorGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_time: new Date(),
            time: 4000,
            classes: "",
            total_time: 0,
            index: 0
        };
    }

    start = () => {
        if(this.state.index > 5){
            alert(`Great your time is ${this.state.total_time}`);
        }
        
        setTimeout(() => {
            this.setState({
                classes: COLORS[this.state.index],
                start_time: new Date()
            });
        this.setState(prevstate => ({ index: prevstate.index + 1}));

        console.log('total time',this.state.total_time);
            
        }, Math.floor(Math.random() * 3000) + 4000  )
    }

    game = () => {
        let time = new Date() - this.state.start_time;
        console.log('time', time);
        this.setState(prevstate => ({ total_time: prevstate.total_time + time}));
        this.setState({classes: ""});
        this.start();
    }


    render() {

      return (
        <div>
            <div className="heading">Click on the frame as soon as the color changes, as soon as possible</div>
            <div onClick={this.game} className={`box ${this.state.classes}`}></div>
            <button className="button" onClick={this.start}>
                Start the game !!
            </button>
        </div>
      );
    }
  }

export default ColorGame;
