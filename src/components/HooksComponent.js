import React, { useState } from 'react'

function HooksComponent() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hooks Counter {count}</button>
        </div>
    )
}

export default HooksComponent
