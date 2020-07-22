import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Class Counter {this.state.count}</button>
            </div>
        )
    }
}
