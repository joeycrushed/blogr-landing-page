import './App.css';
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import LaptopSection from './components/LaptopSection';
import PhoneSection from './components/PhoneSection'

function App() {
  return (
    <div className="app">
      <Hero />
      <Introduction />
      <PhoneSection />
      <LaptopSection />
    </div>
  );
}

export default App;
