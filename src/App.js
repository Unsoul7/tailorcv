import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
    </>
  );
}

export default App;
