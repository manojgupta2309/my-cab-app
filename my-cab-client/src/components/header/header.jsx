import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            isLogin:false
        }
    }
    handleLogout=()=>{
        sessionStorage.removeItem('access-token')
    }
    render(){
        var header = null
        if(this.props.isAuth){
            header=<ul className="nav navbar-nav navbar-right">
            <li><Link to={"/"} className="smoothScroll">home</Link></li>
            <li><Link to={"/booknow"} className="smoothScroll">book now</Link></li>
            <li><Link to={"/bookings"} className="smoothScroll">bookings</Link></li>
            <li><a href="/" className="smoothScroll" onClick={this.handleLogout}>logout</a></li>
        </ul>
        }else {
            header=<ul className="nav navbar-nav navbar-right">
            <li><Link to={"/login"} className="smoothScroll">login</Link></li>
            <li><Link to={"/register"} className="smoothScroll">register</Link></li>
          </ul>
        }
        return <section className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                </button>
                <Link to={"/"} className="navbar-brand">my cab</Link>
            </div>
            <div className="collapse navbar-collapse">
            {header}
                <ul className="nav navbar-nav navbar-right">
                <li><Link to={"/contact"} className="smoothScroll">contact us</Link></li>
                </ul>
            </div>
        </div>
    </section>
    }
}


function mapStateToProps(state) {
   //console.log(state)
        return {
            isAuth:state.authReducer.isAuth
        }
    }
 
    
    
    export default connect(mapStateToProps)(Header)