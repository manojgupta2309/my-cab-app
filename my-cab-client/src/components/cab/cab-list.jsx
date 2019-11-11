import React,{Component} from 'react'
import {connect} from 'react-redux'
import './cab-list.css'

class CabList extends Component {
   
    render(){
        let cabs = <p>loading available cabs....</p>
        if(this.props.cabs && this.props.cabs.length>0)
         cabs = this.props.cabs.map((cab)=>{
            return <section id="item"  key={cab._id} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="card mb-3">
            <div className="row">
              <div className="col-md-2 cab-detail">
              <img src={"./images/"+cab.cab_type+".png"} className="img-cvr" alt="..." width="10%" height="20%"/>
              <p className="card-text">{cab.cab_number}</p>
              <div className="submit">
              <button type="button"  className="btn btn-success" onClick={()=>this.props.handleBook(cab)} >book</button>
              </div>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">name: {cab.driver_name}</h5>
                  <span className="amount">amount: $100</span>
                
                  <p className="card-text">contact: {cab.driver_number}</p>
                </div>
              </div>
            </div>
          </div>
           
           
            </section> 
            
            })
         
        return<section id="" className="parallax-section">
           
       {cabs}
    </section>

    }

   

}
function mapStateToProps(state) {
//console.log(state)
    return {
        cabs:state.cabReducer
    }
}

function mapDispatchToProps(dispatch) {
    return{
        bookCab:(cab_id)=>{
            dispatch({
                type:"Book_Cab",payload:cab_id
            })
        },
        getCabs:(data)=>{
            dispatch({
                type:"Get_Cabs",payload:data
            })
        }
    }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(CabList)