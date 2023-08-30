import '../styles/ReservationCard.css'

export const Card = (props) =>{
    return(
        <div className='card-principal'>
         <div className='card'>
          <p>Codigo Reservacion:{props.code}</p>
          <p>Fecha:{props.date}</p>
          <p>Hora:{props.hour}</p>
          <p>Cancha:{props.number}</p>
          <div className='reservation-options'>
            <button>Cancelar</button>
            <button>Re-agendar</button>
          </div>
         </div>
        </div>
    )
}