
import './App.css';
import Book from './components/book/Book';
import BookSummary from './components/booksummary/BookSummary';
import Counter from './components/booksummary/Counter';
import CustomerDetails from './components/customerdetails/CustomerDetails';
import Header from './components/header/Header';
import Login from './components/login/Login';
import MyCart from './components/mycart/MyCart';
import MyWishlist from './components/mywishlist/MyWishlist';
import OrderSuccess from './components/ordersuccess/OrderSuccess';
import OrderSummary from './components/ordersummary/OrderSummary';
import Routerone from './components/router/router';
import SignUp from './components/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Lander from './pages/lander/Lander';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Lander /> */}
      {/* <Book /> */}
      {/* <Header /> */}
      {/* <BookSummary /> */}
      {/* <Counter /> */}
      {/* <MyCart /> */}
      {/* <CustomerDetails /> */}
      {/* <OrderSummary /> */}
      {/* <OrderSuccess /> */}
      {/* <MyWishlist /> */}
      <Routerone />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
