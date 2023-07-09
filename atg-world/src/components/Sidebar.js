import { GoLocation } from 'react-icons/go'
import { BiPencil } from 'react-icons/bi'
import { FaRegHandPointRight } from 'react-icons/fa'
import { useAuth } from '../utils/auth'

function Sidebar() {
    const auth = useAuth()
    const groups = [
        { name: 'Liesure', image: 'g1', isFollow: true },
        { name: 'Activism', image: 'g2', isFollow: false },
        { name: 'MBA', image: 'g3', isFollow: false },
        { name: 'Philosophy', image: 'g4', isFollow: false }

    ]

    return (
        <div className="w-1/4 max-[520px]:hidden">
            <div className='flex items-center border-b'>
                <GoLocation className='mr-2' />
                <input type="text" placeholder='Noida,India' className='outline-none' />
                <BiPencil className='text-black ml-9' />
            </div>

            <div className='flex justify-between items-center w-full mt-4'>
                <img src="/images/location.svg" alt="location" />
                <p className='text-[#808080] text-xs ml-4 mt-3'>Your location will help us serve better and extend a personalised experience.</p>
            </div>

            {auth.isLogin ?

                <div className='mt-14'>
                    <div className='flex items-center '>
                        <FaRegHandPointRight />
                        <h2 className='ml-3'>RECOMMENDED GROUPS</h2>
                    </div>
                    <ul className='mt-7 mb-14'>
                        {groups.map(({ name, image, isFollow }) => (
                            <li key={name} className='flex items-center justify-between mb-5'>
                                <div className='flex items-center'>
                                    <img src={'/images/' + image + '.jpg'} alt={image} className='w-8 h-8 rounded-full' />
                                    <h2 className='ml-3'>{name}</h2>
                                </div>
                                <button className={isFollow ? 'bg-black text-white px-3 py-[3px] rounded-full text-sm' : 'bg-gray-300 px-3 py-[3px] rounded-full text-sm'}>{isFollow ? 'Followed' : 'Follow'}</button>
                            </li>
                        ))}
                    </ul>

                    <div className='flex justify-end'>
                        <p className='text-blue-500 font-normal text-sm'>See More...</p>
                    </div>
                </div>
                : ''
            }

        </div>
    )
}

export default Sidebar