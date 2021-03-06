import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/CartProvider';
import Router from './components/Router/Router.jsx'

function App() {
  return (
    <CartProvider> 
      <Router />
    </CartProvider>
  );
}

export default App;
