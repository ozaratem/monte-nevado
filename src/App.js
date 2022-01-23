import './App.css';
import Banner from './components/Banner';
import Info from './components/Info';
import Banner2 from './components/Banner2';
import Contact from './components/Contact';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Info/>
      <Banner2/>
      <Contact/>
      <Reservation/>
    </div>
  );
}

export default App;
