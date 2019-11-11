import React,{Component} from 'react'
import Http from '../../../service/http'
class Register extends Component{
    constructor(){
        super()
        this.registerUrl = "auth/register"
        this.state = {
            email: "",
            password:"",
            confirmpassword:"",
            passwordMismatch:false,
            error:false,
            registration:false
            
          };
          
          this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
          passwordMismatch:false
        });

      }
   
      handleRegister=()=>{
        if(this.state.password !== this.state.confirmpassword){
                this.setState({
                    passwordMismatch:true
                })
                
        }else {
            let user = {
                email: this.state.email,
                 password: this.state.password
                 
             }
            //console.log("register",user)
             Http.post(this.registerUrl,user,(resp)=>{
                if(resp.status==201){
                  this.setState({
                    registration:true
                  })
                  setTimeout(()=>{
                    this.props.history.push('/login');
                  },2000)
                  
                }
             //console.log(resp)
             })
        }
    }
    render(){
      var msg=null;
       if(this.state.passwordMismatch){
        msg = <div className="error">
           <span>password mismatch</span>
           </div>
       }
       if(this.state.registration){
        msg = <div className="msg">
        <p>registration success!!</p>
        <p>redirecting to login page</p>
        </div>
       }
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
        <div className="submit">
        <p><i className="fa fa-key"></i>confirm password</p>
        <input type="password" className="form-control"  name="confirmpassword"  value={this.state.confirmpassword}
        onChange={this.handleInputChange}  />
        </div>
        {msg}
        <div className="submit">
        
        <button type="button"  className="btn btn-success" onClick={this.handleRegister}  disabled={!(this.state.email && this.state.password && this.state.confirmpassword)} >register</button>
      </div>
      
      </form>
      
        </div>
        </div>
        </div>
   
     }
}

export default Register