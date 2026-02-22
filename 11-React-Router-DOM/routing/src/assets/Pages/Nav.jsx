import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='dv'>
            <h2>Kanak Classes</h2>
            <div className='dv2'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    )
}

export default Nav