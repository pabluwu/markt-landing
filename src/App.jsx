import { BrowserRouter } from 'react-router-dom'
import UserRouter from './Routes'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <UserRouter />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
