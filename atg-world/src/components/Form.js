import { useAuth } from '../utils/auth'


function Form({ text, isAccount, signInorUp, fistName, lastName, cnfPass }) {
    const auth = useAuth()

    const handleToggle = () => {
        auth.isForm === 'signup' ? auth.setIsForm('signin') : auth.setIsForm('signup')
    }

    const handleLogin = () => {
        auth.setIsLogin(true)
        auth.setIsForm(null)
    }

    const handleClose = () => {
        auth.setIsForm(null)
    }

    return (
        <>
            <header className="text-[#008A45] bg-green-100 text-xs py-1 pl-8 font-medium max-[520px]:hidden">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</header>
            <div className='px-4 py-3'>
                <div className='flex items-center justify-between my-4'>
                    <h2 className='text-xl font-medium'>{text}</h2>
                    <p className='text-xs max-[520px]:hidden'>
                        <span className='text-[#3D3D3D]'>{isAccount}</span>
                        <span className='text-[#2F6CE5] font-medium cursor-pointer' onClick={handleToggle}>{signInorUp}</span>
                    </p>
                    <p className="bg-black text-white w-6 h-6 rounded-full flex justify-center items-center font-bold cursor-pointer lg:hidden md:hidden" onClick={handleClose}>X</p>
                </div>

                <div className='flex justify-between max-[520px]:w-full'>
                    <form className='flex flex-col lg:w-1/2 max-[520px]:w-full'>
                        {
                            fistName && lastName ?
                                <div className='flex'>
                                    <input type="text" name='firstname' placeholder='First Name' className='bg-gray-100 w-full pl-2 border border-[#D9D9DB]  py-2' />
                                    <input type="text" name="lastname" placeholder='Last Name' className='bg-gray-100 w-full pl-2 border-r border-t border-l border-b py-2' />
                                </div>
                                : ''
                        }
                        <input type="email" name='email' placeholder='Email' className='bg-gray-100 pl-2 border border-[#D9D9DB]  py-2' />
                        <input type="password" name="password" placeholder='Password' className='bg-gray-100 pl-2 border-r border-l border-b py-2' />
                        {/* cnfPass */}
                        {cnfPass ? <input type="cnf-password" name="cnf-password" placeholder='Confirm Password' className='bg-gray-100 pl-2 border-r border-l border-b py-2' /> : ''}

                        <button type='submit' className=' py-2 bg-blue-500 text-white rounded-3xl my-4 max-[520px]:hidden' onClick={handleLogin}>{text}</button>

                        <div className='lg:hidden md:hidden flex justify-between items-center'>
                        <button type='submit' className='text-sm py-1 px-4 bg-blue-500 text-white rounded-2xl my-4 max-[520px]' onClick={handleLogin}>{text}</button>
                        <span className='font-medium text-sm cursor-pointer underline' onClick={handleToggle}>{ text==='Create Account'? 'or,Sign in': 'or,Create Account'}</span>
                        </div>

                        <button type='submit' className=' py-2 border border-[#D9D9DB] rounded mb-3 flex items-center justify-center'>
                            <img src="/images/search.svg" alt="search" className='mr-2 w-4' />
                            {text === 'Create Account' ? 'Sign up with Facebook' : text + ' with Facebook'}
                        </button>
                        <button type='submit' className=' py-2 border border-[#D9D9DB] rounded mb-3 flex items-center justify-center'>
                            <img src="/images/f_logo_RGB-Blue_1024.svg" alt="search" className='mr-2 w-4' />
                            {text === 'Create Account' ? 'Sign up with Google' : text + ' with Google'}</button>
                        <button className='font-medium'>Forgot Password?</button>
                    </form>
                    <img src="/images/formimg.svg" alt="screenshot" className='max-[520px]:hidden' />
                </div>
            </div>
        </>
    )
}

export default Form