import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Dosyayı import et
import OrderPage from './pages/OrderPage'; // Sipariş sayfası
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* Herkesin görebileceği sayfalar */}
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={CartPage} />

        {/* 🔒 Sadece giriş yapanların (token olanların) görebileceği sayfalar */}
        <ProtectedRoute path="/order" component={OrderPage} />
        
        {/* Diğer sayfalar... */}
      </Switch>
    </Router>
  );
}