import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import {Routes,Route} from 'react-router-dom'
import SingleProduct from './Pages/SingleProduct';
import Cocktails from './Pages/Cocktails';

function App() {
  return (
    <>
      <Navbar />
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cocktails' element={<Cocktails />} />
       <Route path='/single-product/:id' element={<SingleProduct />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;
