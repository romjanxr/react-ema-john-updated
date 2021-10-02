import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './Shop/Shop';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/orders">
          <OrderReview />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/orderplaced">
          <OrderPlaced />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
