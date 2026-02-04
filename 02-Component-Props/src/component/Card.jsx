import React from 'react'

const Card = (props) => {    
    return (
        <div>
            <div className="parent">
                <div className="top">
                    <img src={props.imageurl} alt="" />
                </div>
                <div className='bottom'>
                    <h2>{props.place}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis officia ea. Lorem, ipsum dolor.</p>
                    <div className="btn">
                        <button>{props.rating} ⭐⭐⭐⭐⭐</button>
                        <button>{props.stay}</button>
                    </div>
                    <div className='reserve'>Reserve Now</div>
                </div>
            </div>
        </div>
    )
}

export default Card