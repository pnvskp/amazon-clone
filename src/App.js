import React,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import './App.css';

const promise = loadStripe(
  "pk_test_51HiwTKLIEvAeG80t2SHgeXYDbVh7nmehRHwOLlpgG9oa1vdZPKoPFq6ulmoPfSsPLSJW0LJChrmZsGbvDUZCMHH5003sTuNpWL"
);

function App() {
  const [{},dispatch] = useStateValue();

  useEffect( () =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('The User is ->',authUser);

      if(authUser){
        dispatch( {
          type: 'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[]);
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path='/'>
    <Navbar/>
    <Home/>
    </Route>
    <Route path='/checkout'>
    <Navbar/>
    <Checkout/>
    </Route>
    <Route path='/payment'>
    <Navbar/>
    <Elements stripe={promise}>
    <Payment/>
    </Elements>
    </Route>
    <Route path='/login' component={Login}/>
    <Route path='/orders'>
    <Navbar/>
    <Orders/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
