import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SingleProduct from './Pages/SingleProduct';
import Cocktails from './Pages/Cocktails';

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cocktails' element={<Cocktails />} />
       <Route path='/cocktail/:id' element={<SingleProduct />} />
    </Routes>
      <Footer />
    </Router>
  );
}

export default App;
