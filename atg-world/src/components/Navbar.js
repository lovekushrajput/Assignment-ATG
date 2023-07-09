import { MdOutlineArrowDropDown } from 'react-icons/md'


function Navbar() {
    const navNames = ['Article', 'Event', 'Education', 'Job']


    const largeScreenNav = () => (
        <div className='w-[1040px] mx-auto my-7 max-[520px]:hidden'>
            <div className='flex items-center justify-between border-b'>
                <ul className='flex justify-between space-x-4'>
                    <li className='border-black border-b pb-5'>All Posts(32)</li>
                    {navNames.map((name) => (
                        <li key={name} className='text-gray-400'>
                            {name}
                        </li>
                    ))}
                </ul>

                <div className='flex justify-between space-x-4 pb-3'>
                    <button className='flex items-center font-medium bg-gray-300 px-2 py-1 rounded'>
                        Write a Post
                        <MdOutlineArrowDropDown className='ml-1' />
                    </button>

                    <button className='flex items-center font-medium text-white bg-blue-600 px-2 py-1 rounded'>
                        <img src="/images/user-incs.svg" alt="user" className='mr-2' />
                        Join Group
                    </button>
                </div>
            </div>
        </div>
    )

    const smallScreenNav = () => (
        <div className='flex items-center justify-between lg:hidden md:hidden px-4 my-4'>
            <p className='font-medium text-lg'>Post(368)</p>
            <div className=' bg-gray-200 inline-block pl-2 py-2 rounded'>
                <label htmlFor="filter" className='font-medium leading-none text-base'>Filter:</label>
                <select name="filter" id="filter" className='bg-transparent w-[60%] font-medium'>
                    <option value="All">All</option>
                    {navNames.map((name) => (
                        <option key={name} value={name}>{name}</option>
                    )
                    )}
                </select>
            </div>
        </div>
    )

    return (
        <>
            {largeScreenNav()}
            {smallScreenNav()}
        </>
    )
}

export default Navbar