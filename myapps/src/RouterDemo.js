import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
class RouterDemo extends Component {
    render() {
        return (
            <div>
                <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/services" component={Services}/>
                <Route  path="/contact" component={Contact}/>
                <Route  component={PagenotFound}/>
               
                </Switch>
                 
                </Router>
               
               
            </div>
        );
    }
}
const Home=()=>{
    return(
        <>
        <h1>Hello Home Page</h1>
        <p>Your homepage content options are many. After consulting with a ton of clients
         about their homepage strategies, I decided to create a checklist of 20 ideas—a planning tool.</p>
        </>
    )
}
const About=()=>{
    return(
        <>
        <h1>Hello About Page</h1>
        <p>Your homepage content options are many. After consulting with a ton of clients
         about their homepage strategies, I decided to create a checklist of 20 ideas—a planning tool.</p>
        </>
    )
}
const Services=({match})=>{
    return(
        <>
        <h1>Hello Services Page</h1>
        <ul>
            <li>  <Link to={`${match.path}/mob-application`}>Mob Application</Link> </li>
            <li>  <Link  to={`${match.path}/web-designer`}> Web Designer </Link></li>
            <li>  <Link  to={`${match.path}/web-developement`}>Web Development</Link></li>
            <li>  <Link  to={`${match.path}/sco-service`}>SCO</Link></li>
        </ul>
        <Switch>
        <Route path={`${match.path}/:slug`} component={Service}/>
        </Switch>
      </>
    )   
}
const Service=({match})=>{
    return(
        <>
       <h1>Services Details</h1>
    <h3>Services Name:{match.params.slug}</h3>
        </>
    )
}
const Contact=()=>{
    return(
        <>
        <h1>Hello Contact Page</h1>
        <p>Email Id:vr@infotech</p>
        <p>Phone :+91 9919113011</p>
        
        </>
    )
}
const PagenotFound=()=>{
    return(
        <>
        <h1>404 Error !</h1>
        <p>Page Not Found</p>
        
        
        </>
    )
}

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Maxx',
            id: '101'
        }
    }
    render()
        {
            setTimeout(()=>{this.setState({name:'Jaeha', id:'222'})},2000)
            return (                                 
 
<div>
                   
<h1>Hello {this.state.name}</h1>
     
<h2>Your Id is {this.state.id}</h2>
 
                   </div>
 
            );
        }
    }

export default RouterDemo;