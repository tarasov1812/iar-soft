import Personas from './components/Personas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import data from './personas.json';

function App() {

  return (
    <div>
      <Navbar/>
      <Personas
        personas={data.people}
        ciudades={data.cities}
        paises={data.countries}
        estudios={data.studies}
        generos={data.gender}
        gruposSanguineos={data.bloodType}
      />
      <Footer/>
    </div>
  );
}

export default App;
