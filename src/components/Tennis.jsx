import '../styles/Tennis.css'
import { useEffect, useState } from 'react';
import Tennis_court_metric from '../assets/Tennis_court_metric.png'
import Tenis from '../assets/Tenis.jpg'
import historia from '../assets/historia.jpg'
import historia1 from '../assets/historia1.jpg'
import vestimenta from '../assets/vestimenta.jpg'

export const Tennis = () => {
  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('#elementos a');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {  
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className='Tennis'>
      <nav id='elementos'>
        <ul id='element'>
          <li><a href="#historia">Historia</a></li>
          <li><a href="#reglamento">Reglamento</a></li>
          <li><a href="#vestimenta">Vestimenta</a></li>
          <li><a href="#cancha">Canchas</a></li>
        </ul>
      </nav>
      <h1 id='tenis'>Tennis</h1>

      <div>
      <p id='Signi'>El tenis es un deporte de raqueta que se practica sobre una pista rectangular, 
          delimitada por líneas y dividida por una red. Se disputa entre dos jugadores (individuales) 
          o entre dos parejas (dobles). El objetivo del juego es desplazar la pelota de tal forma 
          que el adversario no sea capaz de devolverla antes de que bote dos veces.
        </p>
        <img id='imgtenis' src={Tenis} alt='Tenis'/>
      </div>

      <div id='historia'>
        <h2 id='history'>Historia</h2>
        <p id='history1'>Las referencias del tenis tienen lugar en francia nombrado <span>Le paume (Juego de palmas)</span>
          dado que al principio se golpeaba la pelota con las manos. El tenis se jugaba en hierba natural</p>

        <img id='imghistoria' src={historia} alt='Historia'/>
        <img id='imghistoria1' src={historia1} alt='Historia1'/>
      </div>
      
      <div id='reglamento'>
        <h2 id='regla'>Reglamento</h2>
        <ul id='regla1'>
          <li>El jugador solo puede golpear la pelota una vez por turno</li>
          <li>El juego lleva una puntuación inusual, el primer punto vale como 15, el segundo 30 y el tercero como 40</li>
          <li>El partido se gana con 2 sets o con 3 sets dependiendo si se juega al mejor de 3 o al mejor de 5</li>
          <li>La pelota solo puede ser rebotada una vez antes de ser impactada por el jugador</li>
          <li>Ningun jugador podrá tocar la red, esto se considera punto perdido para el mismo</li>
        </ul>
      </div>

      <div id='vestimenta'>
        <h2 id='vestim'>Vestimenta</h2>
        <p id='vestim1'>El tenis es conocido como el deporte blanco, asi que en su mayoria, los jugadores estan vestidos 
          con prendas blancas</p>
        <img id='imgvestim' src={vestimenta} alt='Vestimenta'/>
      </div>

      <div id='canchas'>
        <h2 id='cancha'>Canchas</h2>
        <p id='cancha1'>Las canchas de tenis son de forma rectangular, de 23,77 m de longitud por 8,23 m de ancho.
          La red tiene 1,07 m de altura en el centro y 91 cm en los extremos. Las canchas 
        pueden ser de diferentes superficies, las mas 
          comunes son las de arcilla</p>
        <img id='imgcancha' src={Tennis_court_metric} alt='Cancha de tenis'/>
      </div>
    </div>
  )
}