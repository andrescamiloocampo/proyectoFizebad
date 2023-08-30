import { Card } from '../components/ReservationCard'
import { useState } from 'react'
import '../styles/Reservation.css'

export const Reservation = () => {
    const [reservations, setReservations] = useState([])
    const [code, setCode] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [courtNumber, setCourtNumber] = useState(0)
    const [hasReservations, setHasReservations] = useState(false)

    const handleForm = e => {
        e.preventDefault()
        const data = {
            code: '2h13gj13',
            date: date,
            hour: hour,
            courtNumber: courtNumber
        }
        setReservations([...reservations, data])
        setHasReservations(true)
    }

    const handleChangeHour = (e) => {
        setHour(e.target.value);
    }
    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }
    const handleChangeCourtNumber = (e) => {
        setCourtNumber(e.target.value);
    }

    return (
        <>
            <div className='reservaciones-principal'>
                <div className='reservaciones-lista'>
                    {hasReservations ?
                        reservations.map((reservation) => (
                            <Card
                                key={reservation.code} 
                                code={reservation.code}
                                date={reservation.date}
                                hour={reservation.hour}
                                number={reservation.courtNumber}
                            />
                        )) :
                        <div className='no-res'>
                            <h2>
                            Aún no tienes reservaciones
                            </h2>    
                        </div>
                    }

                    {/* {reservations.map((reservation) => (
                        <Card
                            code={reservation.code}
                            date={reservation.date}
                            hour={reservation.hour}
                            number={reservation.courtNumber}
                        />
                    ))} */}
                </div>
                <div className='form-container'>
                    <form onSubmit={handleForm} className='reservation-form'>
                        <h2>Reservación</h2>
                        <input type="date" value={date} onChange={handleChangeDate} />
                        <input type="number" placeholder='Ingrese la hora' onChange={handleChangeHour} value={hour} />
                        <select name="Numero de cancha" id="" value={courtNumber} onChange={handleChangeCourtNumber}>
                            <option value="1">Cancha 1</option>
                            <option value="2">Cancha 2</option>
                            <option value="3">Cancha 3</option>
                            <option value="4">Cancha 4</option>
                        </select>
                        <button>Hacer reservación</button>
                    </form>
                </div>
            </div>
        </>
    )
}