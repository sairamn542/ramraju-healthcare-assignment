import './App.css';
import Head from './components/Head';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Section2 from './components/Section2.jsx';
import MedicalSpeciallities from './components/MedicalSpeciallities.jsx';
import CountDetails from './components/CountDetails.jsx';
import Devices from './components/Devices.jsx';
import Middle from './components/Middle.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Head />
      <Middle />
      <Section2 />
      <MedicalSpeciallities />
      <CountDetails />
      <Devices />
      <Features />
      <Footer />
    </>
  );
}

export default App;
