import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Auth } from './components/Auth'
import { Reservation } from './components/Reservation';
import { Tennis } from './components/Tennis';

function App() {  
  return (      
    <Router>
      <Home/>
        <Routes>                                                  
          <Route path='/auth' element={<Auth/>} />          
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/tennis' element={<Tennis/>}/>
        </Routes>
    </Router>              
  )
}

export default App