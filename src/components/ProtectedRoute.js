import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; 
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/cart" component={CartPage} />
        <ProtectedRoute path="/order" component={OrderPage} />
      </Switch>
    </Router>
  );
}