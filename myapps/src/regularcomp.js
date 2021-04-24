import React,{Component} from 'react'
class Regcomp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name
        }
 }
 componentDidMount(){
    setInterval(()=>{this.setState({name:"Rohit"})},2000);

  }
    render(){
        console.log("regular component render");
        return(
            <>
            <h1>Hello friend:{this.state.name}</h1>
            </>
        )
    }
}
export default Regcomp;