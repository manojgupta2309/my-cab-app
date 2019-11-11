import React,{Component} from 'react'
import {connect} from 'react-redux'
import Http from '../../service/http'
import '../cab/cab-list.css'

class BookingList extends Component {

    componentDidMount(){
        Http.get('/booking',(res)=>{
            this.props.getBookings(res.data)
        })
       
    }
    getDateTime(dateTime){
        let date = new Date(dateTime); 
                
              return  date.toISOString().slice(0, 19).replace('T', ' '); 

    }
   
    render(){
        var bookings = <p>loading bookings....</p>
        if(this.props.bookings && this.props.bookings.length>0)
        bookings = this.props.bookings.map((booking)=>{
            return <section id="item"  key={booking._id} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="card mb-3">
            <div className="row">
              <div className="col-md-2 cab-detail">
              <img src={"./images/"+booking.cab_type+".png"} className="img-cvr" alt="..." width="10%" height="20%"/>
              <p className="card-text">{booking.cab_number}</p>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">name: {booking.driver_name}</h5>
                  <span className="amount">amount: $100</span>
                
                  <p className="card-text">contact: {booking.driver_number}</p>
                  <p className="card-text">date: {this.getDateTime(booking.booking_time)}</p>
                </div>
              </div>
            </div>
          </div>
           
           
            </section> 
            
            })
         
        return <div className="parallax-section content">
        <div className="container">
            <div className="row">
               
                <div className="col-md-9 col-sm-9 wow fadeInUp search-results" data-wow-delay="0.6s">
               
                 {bookings}
            </div>
               
            </div>
           
        </div>
    </div>
    
    }

   

}
function mapStateToProps(state) {
//console.log(state)
    return {
        bookings:state.bookingReducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        
        getBookings:(data)=>{
            dispatch({
                type:"Get_Bookings",payload:data
            })
        }
    }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(BookingList)