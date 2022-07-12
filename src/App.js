
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#25387e';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
    }
  }

  return (
    <>
    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <TextForm heading="Enter Your Text To Analyse" mode={mode} showAlert={showAlert}/>
      <About/>
    </>
  );
}

export default App;
