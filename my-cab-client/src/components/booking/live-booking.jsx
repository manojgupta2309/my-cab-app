import React,{Component} from 'react'
import {connect} from 'react-redux'
import Http from '../../service/http'

class LiveBooking extends Component {

    componentDidMount(){
        const {id} = this.props.match.params;
        Http.get("booking/"+id,(resp)=>{
            if(resp.status == 200){
                this.props.getLiveBooking(resp.data)
            }
        })
    }
   
   
    render(){
       return <div className="parallax-section content">
        <div className="container">
            <div className="row">
                <h2>live booking</h2>
                <p>
                your booking has been confirmed,Please find below details
                </p>
                <p>
                    cab number : {this.props.liveBooking.cab_number} <br/>
                    driver name : {this.props.liveBooking.driver_name}<br/>
                    driver number : {this.props.liveBooking.driver_number} <br/>
                    start location : {this.props.liveBooking.start} <br/>
                    end location : {this.props.liveBooking.end} <br/>
                </p>
            </div>
           
        </div>
    </div>
    
    }

   

}
function mapStateToProps(state) {
    return {
        liveBooking:state.livebookingReducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        
        getLiveBooking:(data)=>{
            dispatch({
                type:"Get_Live_Booking",payload:data
            })
        }
    }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(LiveBooking)