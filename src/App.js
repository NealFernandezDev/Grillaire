import './App.css';
import About from './Components/Assets/About/About';
import Chefs from './Components/Assets/Chefs/Chefs';
import Header from './Components/Assets/Header/Header';
import Hero from './Components/Assets/Hero/Hero';
import Menu from './Components/Assets/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Chefs />
      <Menu />
    </div>
  );
}

export default App;
