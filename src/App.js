import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Componentes/Header/Header';
import
{
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Componentes/Home/Home';
import Apointment from './Componentes/Apointment/Apointment';
import Services from './Componentes/Services/Services';
import AboutUs from './Componentes/AboutUs/AboutUs';
import Footer from './Componentes/Footer/Footer';
import Login from './Componentes/Login/Login';
import NotFound from './Componentes/NotFound/NotFound';
import Register from './Componentes/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Componentes/PrivateRoute/PrivateRoute';
import ServiceDetails from './Componentes/ServiceDetails/ServiceDetails/ServiceDetails';
function App()
{
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/apointment">
              <Apointment></Apointment>
            </PrivateRoute>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/servicedetails/:servicedetailsId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
