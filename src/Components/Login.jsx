
import { useState, useRef  } from 'react'
import { useLogin } from '../Hooks/useLogin'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

export default function Login() {

    // 3. Consumir el contexto
    const { setUser } = useContext(AuthContext)
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')    
    
    const { login } = useLogin()
      
    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if(!isSuccess)   
        {
            setError("Credenciales incorrectas");
        }
        else
        {            
            setUser(email)        
        }
    }


    return (
        <>        
         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
<div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
  <input 
    type="email"
    placeholder="Correo"
    ref={emailRef}
    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <br/>
  <input
    type="password"
    placeholder="Contraseña"
    ref={passwordRef}
    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <br/>
  <button
    onClick={handleLogin}
    className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition-colors"
  >
    Ingresar
  </button>
  {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
</div>
            
        </>
    )
}