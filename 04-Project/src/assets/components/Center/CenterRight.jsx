import RightCard from "./RightCard"

const CenterRight = (props) => {


    return (
        <div className='w-2/3 p-4 flex flex-nowrap gap-5 overflow-x-scroll' id="flow">
            {props.users.map(function (elem,idx){
                
                return <RightCard key={idx} sr={idx}  img={elem.img} tag={elem.tag} color={elem.color} />
            })}


        </div>
    )
}

export default CenterRight