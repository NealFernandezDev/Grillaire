import About from './Components/Assets/About/About';
import Address from './Components/Assets/Address/Address';
import Chefs from './Components/Assets/Chefs/Chefs';
import Gallery from './Components/Assets/Gallery/Gallery';
import Header from './Components/Assets/Header/Header';
import Hero from './Components/Assets/Hero/Hero';
import Menu from './Components/Assets/Menu/Menu';
import Reservation from './Components/Assets/Reservation/Reservation';
import Testimonial from './Components/Assets/Testimonial/Testimonial';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Chefs />
      <Menu />
      <Reservation />
      <Gallery />
      <Testimonial />
      <Address />
    </div>
  );
}

export default App;
