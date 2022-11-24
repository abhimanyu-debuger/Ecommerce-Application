import './App.css';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreen from './Screen/HomeScreen';
import ProductDetails from './Screen/ProductDetails';
import CartScreen from './Screen/CartScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ProfileScreen from './Screen/ProfileScreen';
import ShippingScreen from './Screen/ShippingScreen';
import PaymentScreen from './Screen/PaymentScreen';
import PlaceOrderScreen from './Screen/PlaceOrderScreen';
import OrderScreen from './Screen/OrderScreen';

function App() {
  return (
    <Router>
      <Header/>
     <main className="my-3">
     <Container>
        <Route path="/order/:id" component={OrderScreen}  />
        <Route path="/login" component={LoginScreen}  />
        <Route path="/payment" component={PaymentScreen}  />
        <Route path="/placeorder" component={PlaceOrderScreen}  />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/profile" component={ProfileScreen}  />
        <Route path="/register" component={RegisterScreen}  />
        <Route path="/cart/:id?" component={CartScreen}/>
        <Route path="/product/:id" component={ProductDetails}/>
        <Route path="/" component={HomeScreen} exact />
     </Container>
     </main>
      <Footer></Footer>
     </Router>
  );
}

export default App;
