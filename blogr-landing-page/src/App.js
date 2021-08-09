import './App.css';
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import PhoneSection from './components/PhoneSection'

function App() {
  return (
    <div className="app">
      <Hero />
      <Introduction />
      <PhoneSection />
    </div>
  );
}

export default App;
