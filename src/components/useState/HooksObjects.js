import React, { useState } from 'react'

function HooksObjects() {
    const resetName = ''
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input
                type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h3>Your first name is {name.firstName}</h3>
            <h3>Your last name is {name.lastName}</h3>
            <button onClick={() => setName(resetName)}>Reset Name</button>
        </form>
    )
}

export default HooksObjects
