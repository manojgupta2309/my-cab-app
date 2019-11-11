import React,{Component} from 'react'
import '../contact/contact.css'
import './book-now.css'
import CabList from '../cab/cab-list'
import Http from '../../service/http'
import {connect} from 'react-redux'
class BookNow extends Component{
    constructor(){
        super()
        this.state={
                start:"",
                end:"",
                searchcab:false
            }
            this.handleInputChange = this.handleInputChange.bind(this);
        
    }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
      }

      handleSearch=()=>{
        let booking = {
           start:this.state.start,
           end:this.state.end
        }
       //console.log(booking)
        this.setState({
            searchcab:true
        })
        Http.get('cab/'+this.state.start+'/'+this.state.end,(resp)=>{
            if(resp.status  && resp.status == 200)
            this.props.getCabs(resp.data)
        })
        
    }
    handleBooking(cab){
        let bookingObj = {
            start:this.state.start,
            end:this.state.end,
            cab_number: cab.cab_number,
            cab_type: cab.cab_type,
            driver_name: cab.driver_name,
            driver_number: cab.driver_number
        }
        Http.post('/booking',bookingObj,(res)=>{
            if(res.status == 201){
                this.props.history.push('/livebooking/'+res.data.booking._id)

            }
        })
       //console.log("handle booking",bookingObj)
    }
    render(){
        var searchResults=null;
        if(this.state.searchcab)
            searchResults =  <CabList handleBook={this.handleBooking.bind(this)}/>
        let booknowForm=<div>
       
        <form className="form-group">
        <div className="">
        <p>start</p>
        <input type="text" className="form-control"  name="start"  value={this.state.start}
        onChange={this.handleInputChange}  />
        </div>
        <div className="submit">
        <p>destination</p>
        <input type="text" className="form-control"  name="end"  value={this.state.end}
        onChange={this.handleInputChange}  />
        </div>
      
      <div className="submit">
      <button type="button"  className="btn btn-success" onClick={this.handleSearch} disabled={!(this.state.start && this.state.end)}>find cabs</button>
      </div>
      
      </form>
        </div>
       
        return <div className="parallax-section content">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-3 wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="heading">enter location</h2>
               {booknowForm}
                </div>
                <div className="col-md-9 col-sm-9 wow fadeInUp search-results" data-wow-delay="0.6s">
               
                 {searchResults}
            </div>
               
            </div>
           
        </div>
    </div>
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getCabs:(data)=>{
            dispatch({
                type:"Get_Cabs",payload:data
            })
        }
    }
    
}


export default connect(null,mapDispatchToProps)(BookNow)
