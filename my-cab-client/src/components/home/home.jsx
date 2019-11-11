import React from 'react';
import {  Link } from 'react-router-dom';
class Home extends React.Component{

    render(){
        
        return <section id="home" className="home">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <h1>welcome to my cab</h1>
                    <h1>ready to go..</h1>
                    <Link  to={`/login`}  className="btn btn-default">book now</Link>
                </div>
            </div>
        </div>		
    </section>
    }
}

export default Home;