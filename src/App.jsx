import { Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Product from './components/Product/Product'
import ProductDetails from './components/Product/ProductDetail'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import './App.css'


function App ()  {
  return (
    <>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
