import { MoveUpRight } from 'lucide-react';


const CenterLeft = () => {
    return (
        <div className='w-1/3 flex flex-col justify-between p-5'>
            <div>
                <h1 className='font-bold text-6xl mb-10'>Proppective <br /> customer <br /> Segmentation</h1>
                <p className='text-gray-800 leading-8 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sed expedita cum aut minima optio, officia voluptatibus veritatis eos perferendis?</p>
            </div>
            <div>
                <MoveUpRight size={50}/>
            </div>
        </div>
    )
}

export default CenterLeft