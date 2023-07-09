import { SlCalender } from 'react-icons/sl'
import { GoLocation } from 'react-icons/go'
import { BsBag, BsFillShareFill } from 'react-icons/bs'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import {data }from '../utils/data.js'



function Posts() {
 

    const largeScreen = (item) => (
        <div className='flex items-center justify-between w-full max-[520px]:hidden mb-6'>
            <img src={'/images/' + item.author.image} alt={item.author.name} className='w-11 h-11 rounded-full object-cover' />
            <div className='flex items-center justify-between w-4/5'>
                <h2 className='text-lg font-medium max-[520px]:text-sm'>{item.author.name}</h2>
                <p className='flex items-center text-[#525252] font-medium max-[520px]:text-sm'><MdOutlineRemoveRedEye className='text-xl mr-2 mt-1 text-[#525252]' /> 1.4k views</p>
            </div>
            <p className='bg-gray-300 px-3 py-2'>
                <BsFillShareFill />
            </p>
        </div>
    )

    const smallScreen = (item) => (
        <div className='flex items-center justify-between w-full lg:hidden mb-4'>
            <div className='flex items-center'>
                <img src={'/images/' + item.author.image} alt={item.author.name} className='w-11 h-11 rounded-full object-cover' />
                <div className='ml-4'>
                    <h2 className='text-lg font-medium max-[520px]:text-sm'>{item.author.name}</h2>
                    <p className='flex items-center text-[#525252] font-medium max-[520px]:text-sm'><MdOutlineRemoveRedEye className='text-xl mr-2 mt-1 text-[#525252]' /> 1.4k views</p>
                </div>
            </div>
            <p className='max-[520px]:ml-5 bg-gray-300 px-3 py-2'>
                <BsFillShareFill className='' />
            </p>
        </div>
    )

    return (
        <div className="lg:w-[65%] max-[520px]:w-full">
            {
                data.map((item) => (
                    <div className="lg:border lg:border-[#E0E0E0] rounded mb-4 max-[520px]:shadow-lg max-[520px]:pb-3">
                        {item.image ? <img src={'/images/' + item.image} alt={item.image} className="lg:h-[224px] w-full object-cover" /> : ''}
                        <div className="px-4">

                            <p className="my-2 font-medium">{item.type}</p>
                            <div className="flex justify-between">
                                <h2 className="font-medium lg:text-lg max-[520px]:text-sm mt-2">{item.heading}</h2>
                                <p className="font-bold text-xl">...</p>
                            </div>
                            {item.content ? <p className="my-3 max-[520px]:text-xs text-gray-400">{item.content}</p> : ''}

                            <div className='flex space-x-6 my-2'>
                                {item.date ? <p className='flex items-center font-medium max-[520px]:text-xs'>
                                    <SlCalender className='mr-2' />
                                    {item.date}
                                </p> : ''}

                                {item.company ? <p className='flex items-center font-medium max-[520px]:text-xs'>
                                    <BsBag className='mr-2' />
                                    {item.company}
                                </p> : ''}

                                {item.location ? <p className='flex items-center font-medium max-[520px]:text-xs'>
                                    < GoLocation className='mr-2' />
                                    {item.location}
                                </p> : ''}
                            </div>
                            {item.button ? <button
                                className={item.button === 'Visit Website' ? 'border w-full text-sm py-1 rounded-xl mb-7 text-red-500 font-medium' : 'border w-full text-sm py-1 rounded-xl mb-7 text-green-500 font-medium'}>{item.button}</button> : ''}

                            {largeScreen(item)}
                            {smallScreen(item)}

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts