import { Link } from "react-router-dom"
import '../styles/Home.css'
import logoFzb from '../assets/logo2.png'
import { AiOutlineCalendar,AiOutlineClockCircle,AiOutlineSearch } from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Reservation } from "./Reservation";

export const Home = () => {
  return (
    <>
      <header>
        <Link to='/' className="logo-container">
          <img className="logoF" src={logoFzb} alt="" />
          <div className="subLogoF">
            <p>Club campestre</p>          
          </div>
        </Link>

        <div className="user-section">
          <Link to='/auth' className="link1">User</Link>          
        </div>
      </header>
      <nav>
        <Link to='reservation' className="button-nav">
          <AiOutlineCalendar className="button-icon"/>
          <p>Agenda</p>
        </Link>
        <div className="button-nav">
          <AiOutlineClockCircle className="button-icon"/>
          <p>Eventos</p>
        </div>
        <div className="button-nav">
          <AiOutlineSearch className="button-icon"/>
          <p>Tennis</p>
        </div>
        <input className="search" type="text" placeholder="Buscas algo?"/>
      </nav>                  
    </>
  )
}