import React, { useState } from 'react'

function HooksCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Minus</button>
            <button onClick={incrementByFive}>Add 5</button>
        </div>
    )
}

export default HooksCounterTwo
