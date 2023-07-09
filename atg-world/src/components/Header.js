import { MdOutlineArrowDropDown } from 'react-icons/md'
import { useAuth } from '../utils/auth'



function Header() {
    const auth = useAuth()

    const handleForm = () => {
        auth.setIsForm('signup')
    }

    const handleShowForm = () => {
        auth.setIsForm('signup')
    }

    const largeScreenHeader = () => (
        <header className='w-full flex justify-between px-14 items-center h-16 max-[520px]:hidden border-b'>
            <h1 className="flex text-3xl">
                <span className='text-[#27A365]'>ATG.</span>
                <p className="flex items-center text-[#5C5D5D] flex-row">
                    W
                    <img src="/images/Union1.svg" alt="union" className='w-6 mt-1' />
                    RLD
                </p>
            </h1>


            <div className="flex w-1/3 bg-[#F2F2F2] rounded-full items-center py-2">
                <img src="/images/Vector.svg" alt="vecter" className='w-8 mr-4 pl-4' />
                <input className="outline-none w-4/5 placeholder:text-[#5C5C5C] placeholder:text-base placeholder:font-[500] bg-[#F2F2F2]"
                    type="text"
                    placeholder="Search for your favorite group in ATG"
                    readOnly
                />
            </div>

            <div className='flex items-center font-medium'>
                {
                    auth.isLogin ?
                        <>
                            <img src={'/images/user1.jpg'} alt={'user'} className='w-8 h-8 rounded-full' />
                            <h2 className='ml-3 flex items-center'>Siddharth Goyal
                                <MdOutlineArrowDropDown className='text-black text-3xl' />
                            </h2>
                        </>
                        :
                        <>
                            <p>Create account.</p>
                            <h2 className='flex items-center text-blue-600 cursor-pointer' onClick={handleForm}>
                                It`s Free!
                                <MdOutlineArrowDropDown className='text-black text-3xl' />
                            </h2>
                        </>
                }

            </div>
        </header>
    )



    const smallScreenHeader = () => (
        <header className='lg:hidden md:hidden flex justify-end gap-4 h-5 my-3 mr-4'>
            <img src="/images/Rectangle.svg" alt="rectangle" />
            <img src="/images/Oval.svg" alt="oval" />
            <img src="/images/Path.svg" alt="path" onClick={handleShowForm} />
        </header >
    )


    return (
        <>
            {largeScreenHeader()}
            {smallScreenHeader()}
        </>

    )
}

export default Header