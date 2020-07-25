import React, { Component } from 'react'

export default class PrevClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialCount: 0,
            count: 0
        }
    }

    resetCount = () => {
        this.setState({
            count: this.state.initialCount
        })
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <p>Count {this.state.count}</p>
                <button onClick={this.resetCount}>Reset</button>
                <button onClick={this.incrementCount}>Add</button>
                <button onClick={this.decrementCount}>Minus</button>
            </div>
        )
    }
}
