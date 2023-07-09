import { createRoot } from 'react-dom/client'
import App from './components/App'
import './style/index.css'
import { AuthProvider } from './utils/auth'

const root = createRoot(document.getElementById('root'))
root.render(
    < AuthProvider>
        <App />
    </AuthProvider>
)