import LeftNav from "./LeftNav"
import RightNav from "./RightNav"


const Nav = () => {
    return (
        <div className='w-full flex justify-between px-10 py-4 items-center'>
            <LeftNav />
            <RightNav />
        </div>
    )
}

export default Nav