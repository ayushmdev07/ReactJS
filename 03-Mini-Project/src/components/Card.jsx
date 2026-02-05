import { Facebook, Send, Twitter } from 'lucide-react';

const Card = (props) => {

    return (
        <>
            <div className="parent">
                <div className="image">
                    <img src={props.image} alt="" />
                </div>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <div className="icons">
                    <Facebook className='icu' />
                    <Twitter className='icu' />
                    <Send className='icu' />
                </div>
                <div className="btn1">
                    <div className="btn01">₹{props.rate}</div>
                    <div className="btn">{props.category}</div>
                </div>
            </div>
        </>
    )
}

export default Card