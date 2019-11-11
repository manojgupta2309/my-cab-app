import React,{Component} from 'react'
import Http from '../../../service/http'

class Login extends Component{
    constructor(props){
        super(props)
        if(sessionStorage.getItem('access-token'))
          props.history.push('/booknow')
        this.loginUrl = "auth/login"
        this.state = {
            email: "",
            password:"",
            error:""
          };
          
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
   
    handleLogin=()=>{
        
        let user = {
           email: this.state.email,
            password: this.state.password
        }
       //console.log("login",user)
        Http.post(this.loginUrl,user,(resp)=>{
          if(resp.status == 404 || resp.status==401){
            this.setState({
              error:resp.data.message
            })
        }else if(resp.status==200 && resp.data.auth){
            sessionStorage.setItem('access-token',resp.data.token)
            
            //this.props.history.push('/booknow');
            window.location.href = "/booknow"
           //console.log(resp)
          }else {
            this.setState({
              error:"something went wrong"
            })
          }

          
        })
        
  
    }
    render(){
      var error=null;
      if(this.state.error)
        error=<div className="error">
       <span>{this.state.error} </span>
       </div>
        return<div className="parallax-section content">
        <div className="container">
        <div className="row contact">
         
        <form className="form-group">
        <div className="submit">
        <p><i className="fa fa-envelope"></i>email</p>
        <input type="text" className="form-control"  name="email"  value={this.state.email}
        onChange={this.handleInputChange}  />
        </div>
        <div className="submit">
        <p><i className="fa fa-key"></i>password</p>
        <input type="password" className="form-control"  name="password"  value={this.state.password}
        onChange={this.handleInputChange}  />
        </div>
        {error}
        <div className="submit">
        
        <button type="button"  className="btn btn-success" onClick={this.handleLogin}  disabled={!(this.state.email && this.state.password)}>login</button>
      </div>
      
      </form>
      
        </div>
        </div>
        </div>
   
     }
}

export default Login