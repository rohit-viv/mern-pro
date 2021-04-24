import React,{PureComponent} from 'react'
class Purecomp extends PureComponent{
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
        console.log("Pure component render");
        return(
            <>
            <h1>Hello friend:{this.state.name}</h1>
            </>
        )
    }
}
export default Purecomp;