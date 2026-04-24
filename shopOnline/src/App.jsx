import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/services";
import Plans from "./pages/plans";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Register from "./pages/CreateAcount";
import Cart from "./pages/ShopingCart";
import Domicilio from "./pages/Domicilio";
import Delivery from "./pages/Delivery";
import Payment from "./pages/payments";
import LastPayment from "./pages/lastpayment";

function AppContent() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/domicilio" element={<Domicilio />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/lastpayment" element={<LastPayment />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
//67