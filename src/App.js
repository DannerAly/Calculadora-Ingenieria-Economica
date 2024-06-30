import './App.css';
import Navbar from './components/Navbar';
//import TablaInteresSimple from './components/tablaInteresSimple';
//import Danner from './components/danner';

//import CalcularVFinal from './components/calculadoras/CalcularVFinal';
// import StyledTest from './components/StyledTest';
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  document.body.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

function App() {
  
  return (
    <>
      <Navbar/>
     
    </>
  );
}

export default App;

