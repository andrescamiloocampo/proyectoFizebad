import '../styles/Auth.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth = () =>{
   let navigate = useNavigate()
   const [name,setName] = useState('')
   const [password,setPassword] = useState('')
   const [changeName,setChangeName] = useState(false)
  
   const handleChangeName = (e) =>{
    setName(e.target.value);    
    setChangeName(true)
   }

   const handlePasswordChange = e =>{
    setPassword(e.target.value)
   }

   const handleForm = (e) => {
    e.preventDefault();
    navigate('/home')
   }
    return(
        <>
          <main>
            <form className='login' onSubmit={handleForm}>
              <h1 className='welcome'>{(changeName)?'Bienvenido':'Iniciar Sesión'}</h1>
              <h2 className='username'>{name}</h2>
              <input type="text" placeholder="Ingrese su nombre de usuario" value={name} onChange={handleChangeName}/>              
              <input type="password" placeholder="Ingrese su contraseña" value={password} onChange={handlePasswordChange}/>
              <button className='sub-button'>Envíar</button> 
            </form>            
          </main>
        </>
    )
}