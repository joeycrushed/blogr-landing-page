import './App.css';
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import LaptopSection from './components/LaptopSection';
import PhoneSection from './components/PhoneSection'
import Footer from './components/Footer'


function App() {
  return (
    <div className="app">
      <Hero />
      <Introduction />
      <PhoneSection />
      <LaptopSection />
      <Footer />
    </div>
  );
}

export default App;
