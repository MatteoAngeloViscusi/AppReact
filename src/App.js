import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import { Ordine } from "./pages/ordine/ordine";
import { Checkout } from "./pages/checkout/checkout";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/ordine" element={<Ordine/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;