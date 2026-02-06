import { MoveRight } from 'lucide-react';

const RightCard = (props) => {
    // console.log(props);
    
    return (
        <div className='h-full w-70 relative rounded-4xl overflow-hidden shrink-0'>
            <img className='h-full w-full object-cover rounded-2xl' src={props.img} alt="Hello" />
            <div className='absolute top-0 left-0 h-full w-full px-6 py-5 flex flex-col justify-between'>
                <h1 className='bg-white h-8 w-8 rounded-full flex justify-center items-center text-2xl font-semibold'>{props.sr+1}</h1>
                <div>
                    <p className='mb-10 text-white text-shadow-gray-400 text-shadow-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus neque laudantium praesentium numquam perferendis accusantium doloremque! Adipisci, sapiente!</p>
                    <div className='flex justify-between items-center text-white'>
                        <button style={{backgroundColor:props.color}} className=' rounded-4xl py-2 px-8 font-semibold'>{props.tag}</button>
                        <MoveRight size={40} strokeWidth={3} className='text-shadow-gray-400 text-shadow-mdrounded-full p-2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard