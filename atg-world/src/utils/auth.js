import { createContext, useContext, useState } from 'react'
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)
    const [isForm, setIsForm] = useState(null)

    return (
        <AuthContext.Provider value={{ isForm, setIsForm, isLogin, setIsLogin }}>
            {
                children
            }
        </AuthContext.Provider>
    )

}



export const useAuth = () => (
    useContext(AuthContext)
)


export default useAuth