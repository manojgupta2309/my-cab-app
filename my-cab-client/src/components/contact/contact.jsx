import React,{Component} from 'react'
import './contact.css'
import Http from '../../service/http'

class Contact extends Component{
    constructor(){
        super()
        this.state={
                name:"",
                email:"",
                message:"",
                query:true
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

      handleSubmit=()=>{
        let contactForm = {
           "name": this.state.name,
            "email": this.state.email,
            "msg": this.state.message
        }
        Http.post('contact',contactForm,
             (resp)=>{
                if(resp.data.status){
                    this.setState({
                        query:false
                    });
                }
             })

    }
    render(){
        let queryForm = null;
        if(this.state.query)
        queryForm=<div>
       
        <form className="form-group">
        <div className="">
        <p><i className="fa fa-user"></i>name</p>
        <input type="text" className="form-control"  name="name"  value={this.state.name}
        onChange={this.handleInputChange}  />
        </div>
        <div className="submit">
        <p><i className="fa fa-envelope"></i>email</p>
        <input type="text" className="form-control"  name="email"  value={this.state.email}
        onChange={this.handleInputChange}  />
        </div>
      <div className="submit">
      <p><i className="fa fa-comments-o"></i>message/feedback</p>
      <textarea type="text" className="form-control" name="message" value={this.state.message}
      onChange={this.handleInputChange}  ></textarea>
      </div>
      <div className="submit">
      <button type="button"  className="btn btn-success" onClick={this.handleSubmit} >submit</button>
      </div>
      
      </form>
        </div>
        else 
        queryForm = <p>thanks for your query/feedback</p>
        return <div className="parallax-section content">
        <div className="container">
            <div className="row contact">
                <div className="col-md-5 col-sm-5 wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="heading">contact us</h2>
               {queryForm}
                </div>
                <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="heading">contact info.</h2>
                <div className="">
                    <p><i className="fa fa-phone"></i> phone</p>
                    <h4>+91-7972393094</h4>
                </div>
                <div className="address">
                    <p><i className="fa fa-map-marker"></i> address</p>
                    <h4>my cab pvt. ltd. </h4>
                    <h4>hyderabad TS India</h4>
                </div>
            </div>
           
            </div>
            <div className="row contact">
            
       
       
            </div>
        </div>
    </div>
    }
}


export default Contact;