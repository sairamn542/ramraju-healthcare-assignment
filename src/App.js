import './App.css';
import Head from './components/Head';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Section from './components/Section.jsx';
import Section2 from './components/Section2.jsx';
import MedicalSpeciallities from './components/MedicalSpeciallities.jsx';
import CountDetails from './components/CountDetails.jsx';

function App() {
  return (
    <>
      <Head />
      <Section />
      <Section2 />
      <MedicalSpeciallities />
      <CountDetails />
    </>
  );
}

export default App;
