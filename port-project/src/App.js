import { Routes, Route } from 'react-router-dom';
import  Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import TrackOrder from './pages/TrackOrder';
import LocationList from './locations/LocationList';
import Locations from './pages/Locations';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage/>} />
        <Route path='trackorder' element={<TrackOrder/>}/>
        <Route path='locations' element={<Locations/>}/>
      </Routes>
      {/* <LocationList /> */}
      <Footer />
    </div>
  );
}

export default App;
