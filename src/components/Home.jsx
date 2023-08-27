import { Link } from "react-router-dom"
import '../styles/Home.css'
import logoFzb from '../assets/logo2.png'
import { AiOutlineCalendar,AiOutlineClockCircle,AiOutlineSearch } from "react-icons/ai";

export const Home = () => {
  return (
    <>
      <header>
        <div className="logo-container">
        <img className="logoF" src={logoFzb} alt="" />
        <div className="subLogoF">
          <p>Club campestre</p>          
        </div>
        </div>
        <div className="user-section">
          <Link to='/auth' className="link1">User</Link>          
        </div>
      </header>
      <nav>
        <div className="button-nav">
          <AiOutlineCalendar className="button-icon"/>
          <p>Fecha</p>
        </div>
        <div className="button-nav">
          <AiOutlineClockCircle className="button-icon"/>
          <p>Hora</p>
        </div>
        <div className="button-nav">
          <AiOutlineSearch className="button-icon"/>
          <p>Tennis</p>
        </div>
        <input type="text" placeholder="Buscas algo?"/>
      </nav>
    </>
  )
}