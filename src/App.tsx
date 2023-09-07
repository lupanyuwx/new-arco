import Home from './component/Home/home'
import { useEffect, useState } from 'react'
import 'markdown-navbar/dist/navbar.css';
import './App.css'


function App() {
  const [md, handleMD] = useState('loading... ...');

  return (
    <div className="App">
      <Home />
    
    </div>
  )
}

export default App
