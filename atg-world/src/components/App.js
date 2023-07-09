import Header from "./Header"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Navbar from "./Navbar"
import Posts from "./Posts"
import Sidebar from "./Sidebar"
import Form from "./Form"
import { useAuth } from '../utils/auth'

function App() {
    const auth = useAuth()


    const handleClose = () => {
        auth.setIsForm(null)
    }


    return (
        <div className="relative">
            <Header />
            {!auth.isLogin ? <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=787&q=80"
                    alt="main"
                    className="w-full lg:h-[438px] object-cover"
                />

                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute lg:mt-[-9.3rem] lg:left-44 max-[520px]:mt-[-5rem] max-[520px]:px-4">
                    <h2 className="lg:text-3xl font-medium text-white max-[520px]:text-xl">Computer Engineering</h2>
                    <p className="text-gray-300">142,765 Computer Engineers follow this</p>
                </div>

                <div className="lg:hidden md:hidden absolute flex top-3 text-white items-center justify-between w-full px-4">
                    <AiOutlineArrowLeft />
                    <button className="border rounded font-medium border-white px-3 py-1">Join Group</button>
                </div>

            </div> : ''}
            <Navbar />
            <div className="lg:flex lg:justify-between lg:w-[1040px] lg:mx-auto lg:my-7 ">
                <Posts />
                <Sidebar />
            </div>

            {
                auth.isForm === 'signup' ?
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 overflow-hidden"></div>
                        <p className="absolute top-[2%] left-[73%] bg-white text-black w-6 h-6 rounded-full flex justify-center items-center font-bold cursor-pointer max-[520px]:hidden" onClick={handleClose}>X</p>
                        <div className="absolute lg:top-[14%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 max-[520px]:w-full max-[520px]:top-[15%]">
                            <Form text={'Create Account'} isAccount={'Already have an account'} signInorUp={'? Sign In'} fistName={'firstName'} lastName={'lastName'} cnfPass={'cnf'} />
                        </div>
                    </>
                    :
                    auth.isForm === 'signin' ?
                        <>
                            <div className="fixed inset-0 bg-black opacity-50 overflow-hidden"></div>
                            <p className="fixed top-[14%] left-[73%] bg-white text-black w-6 h-6 rounded-full flex justify-center items-center font-bold cursor-pointer max-[520px]:hidden" onClick={handleClose}>X</p>
                            <div className="fixed lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 max-[520px]:w-full max-[520px]:top-[54%]">
                                <Form text={'Sign In'} isAccount={'Don’t have an account yet'} signInorUp={'? Create new for free!'} />
                            </div>
                        </>
                        : ''
            }

        </div>
    )
}

export default App