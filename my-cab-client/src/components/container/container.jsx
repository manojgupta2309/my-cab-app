import React, { Component } from 'react'
import Header from '../header/header'
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Contact from '../contact/contact';
import Login from '../auth/login/login'
import Register from '../auth/register/register'
import BookNow from '../book-now/book-now';
import BookingList from '../booking/bookings';
import LiveBooking from '../booking/live-booking';

class Container extends Component{

    render(){
        
        return <div>
        <Header/>
        <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/login'  component={Login} />
        <Route exact path='/register'  component={Register} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/booknow'  component={BookNow} />
        <Route exact path='/bookings'  component={BookingList} />
        <Route exact path='/livebooking/:id'  component={LiveBooking} />
        </Switch>
        
        </div> 
    }
}


export default Container;
