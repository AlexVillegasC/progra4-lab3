import { createRoot } from 'react-dom/client'
import { AuthProvider } from './Context/AuthContext.jsx'
import { RouterProvider } from '@tanstack/react-router'
import router from './routes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>

  ,
)
