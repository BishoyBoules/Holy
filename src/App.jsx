import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import Modal from './layout/Modal';

function App() {
  const [showForm, setShowForm] = useState(false)
  
  return (
    <div className="App">
      <Navbar showModalHandler={() => setShowForm(true)}/>
      <Body/>
      {showForm && <Modal closeModal={() => setShowForm(!showForm)}/>}
    </div>
  );
}

export default App;
