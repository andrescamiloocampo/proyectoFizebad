import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Auth } from './components/Auth'
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>      
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </Router>      
    </div>
  )
}

export default App