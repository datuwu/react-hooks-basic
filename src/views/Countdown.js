import React, { useState, useEffect } from 'react'
class Countdown extends React.Component {
    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {

            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProbs, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                this.props.onTimesUp()
            }
        }
    }
    render() {
        return (
            <div>{this.state.count}</div>
        )
    }
}

const NewCountdown = (props) => {
    const [count, setCount] = useState(10)

    useEffect(() => {
        if (count === 0) {
            props.onTimesUp()
            return
        }
        let timer = setTimeout(() => {
            console.log('run me');
            setCount(count - 1)
        }, 1000);
    }, [count])
    return (
        <div>{count} hooks</div>
    )
}
export { Countdown, NewCountdown }