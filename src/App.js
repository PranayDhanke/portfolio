import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import {} from 'react-router-dom'
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Contacts/>
     <span id='spant' style={{textAlign:'center'}}>Thank you</span>
    </div>
  );
}

export default App;
