import '../styles/Auth.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Auth = () =>{
   let navigate = useNavigate()
   const [name,setName] = useState('')
  
   const handleChangeName = (e) =>{
    setName(e.target.value);
   }

   const handleForm = (e) => {
    e.preventDefault();
    navigate('/home')
   }
    return(
        <>
          <main>
            <form className='login' onSubmit={handleForm}>
              <h1 className='welcome'>Bienvenido</h1>
              <h2 className='username'>{name}</h2>
              <input type="text" placeholder="Ingrese su nombre de usuario" value={name} onChange={handleChangeName}/>
              <input type="password" placeholder="Ingrese su contraseña"/>
              <button className='sub-button'>Iniciar sesión</button> 
            </form>            
          </main>
        </>
    )
}