import React, {Component} from 'react'
import './OrderClick.css'

const maxGames = 2

class OrderClick extends Component {
    state  = {
        list: [1,2,3,4,5,6,7,8,9],
        expected: 1,
        start_time: new Date(),
        time: 4000,
        total_time: 0,
        index: 0,
        visible: false
    }

    penalise = () => {
        this.setState(prevState => ({
            total_time: prevState.total_time + 1000
        }))
    }

    handleClick = index => {
        const { list } = this.state

        if (this.state.expected === list[index]) {
            this.setState(prevState => ({
                expected: prevState.expected+1
            }))
         } else {
            alert('Wrong, Penalty = 1s')
            this.penalise()
         }
        if(this.state.expected == 9) {
            this.endgame(false);
        }
    }

    shuffle = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

    start = () => {
        this.startgame() 
    }

    startgame = () => {
        this.setState(prevState => ({
            list: this.shuffle(this.state.list),
            expected: 1,
            start_time: new Date(),
            index: prevState.index+1,
        }), () => {this.setState({
            visible: true
        })})
    }

    

    endgame = () => {
        let time = new Date() - this.state.start_time 
        this.setState(prevstate => ({ total_time: prevstate.total_time + time}), () => {
            if(this.state.index  == maxGames) {
                alert('Total time = ' + this.state.total_time + 'ms')
                this.setState({
                    visible: false
                })
            } else {
                this.startgame()
            }
        })
    }

    render() {
        return (
            <div className='orderClick'> 
                { this.state.visible && 
                 <div>   
                    <div className='info'> Game: {this.state.index} Click: {this.state.expected} </div>
                    <div className='grid'>
                    {this.state.list.map(
                        (ele, index) => 
                            <div 
                                className = 'element' 
                                key={index} 
                                onClick={() => this.handleClick(index)}> 
                                { this.state.list[index] } 
                            </div>
                    )}
                    </div>
                </div>
                }
                {!this.state.visible && <button className="button" onClick={this.start}>
                    Start the game !!
                </button> }
            </div>
        )
    }

}

export default OrderClick