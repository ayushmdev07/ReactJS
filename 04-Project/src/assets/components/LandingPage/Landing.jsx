import React from 'react'
import Nav from '../Nav/Nav'
import Center from '../Center/Center'

const Landing = (props) => {
    
    return (
        <div>
            <Nav />
            <Center users={props.users} />
        </div>
    )
}

export default Landing