import React, { useState } from 'react'

function HooksObjects() {
    const resetName = ''
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form className="form">
            <div>
                <p>First name</p>
                <input
                    type="text"
                    className="input"
                    maxlength="30"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
            </div>
            <div>
                <p>Last name</p>
                <input
                    type="text"
                    className="input"
                    maxlength="30"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />
            </div>
            <div>
                <h3>{name.firstName} {name.lastName}</h3>
            </div>
            <button className="reset-button" onClick={() => setName(resetName)}>Reset Name</button>
        </form>
    )
}

export default HooksObjects
