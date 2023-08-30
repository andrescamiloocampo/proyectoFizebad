import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Auth } from './components/Auth'
import { Reservation } from './components/Reservation';

function App() {  
  return (      
    <Router>
      <Home/>
        <Routes>                                                  
          <Route path='/auth' element={<Auth/>} />          
          <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
    </Router>              
  )
}

export default App