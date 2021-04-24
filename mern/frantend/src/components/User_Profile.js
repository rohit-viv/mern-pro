import React,{Component} from 'react';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import DefaultUserPic from '../uploads/user.jpg';
const axios=require('axios');

class User_Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
            uploadedProfile:null
        }
    }
    fetchUserDetails=(user_id)=>{
        //console.log(user_id);
        axios.get("http://localhost:5000/userapi/getUserDetails/"+user_id,{
            headers: {
                "Content-Type":"application/json",
              }
        }).then(res=>{
            console.log(res);

           this.setState({email:res.data.result[0].email});
           this.setState({profileImage:res.data.result[0].profileImage});
        })
        .catch(err=>console.log(err))

    }
    ChangeProfileImg=(event)=>{
        //console.log(event.target.files[0]);
        this.setState({ uploadedProfile:event.target.files[0]})
    }

    updateProfile=(e)=>{
         e.preventDefault(); 
         const formData=new FormData();
         formData.append("profileImage",this.state.uploadedProfile);
         formData.append("user_id",this.state.user_id);



         axios.post("http://localhost:5000/userapi/update-profile/",formData,{
            headers: {
                "Content-Type": "application/json",
              },
        }).then(res=>{    
            console.log(res)
            this.setState({msg:res.data.message});
            this.setState({profileImage:res.data.result.profileImage});
        })
        .catch(err=>console.log(err))
    }

    componentDidMount(){
       this.fetchUserDetails(this.state.user_id)
    }
    render(){
         
        if(this.state.profileImage){
            var imagestr=this.state.profileImage;
          var imagestr1=imagestr.replace("public/", "");
            var profilePic="http://localhost:5000/"+imagestr1;
        }else{
            profilePic=DefaultUserPic;
        }

        return (
            <Container>
        <Row>
        <Col>
        <img src={profilePic} alt="profilePic" width="150"/>
        </Col>
          <Col>
          <h2>User Profile</h2>
          <Form className="dform">
           <p>{this.state.msg}</p>
          <Form.Group controlId="formcategory1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" defaultValue={this.state.username} />
       </Form.Group>

       <Form.Group controlId="formcategory2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" defaultValue={this.state.email}/>
       </Form.Group>
       <Form.Group controlId="formcategory4">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control type="file" name="profileImage" onChange={this.ChangeProfileImg}/>
       </Form.Group>
       <Button onClick={this.updateProfile}>Update Profile</Button>
       </Form>
</Col>


      </Row>
   </Container>

    );

    }
       
}

const mapStatetoProps=(state)=>{
  return{
      user_id:state.user.userDetails.userid,
      username:state.user.userDetails.username,
      emai:state.user.email,
      profileImage:state.user.profileImage,
      msg:state.user.msg
  }
  }
  export default connect(mapStatetoProps)(User_Profile);
  
  
/* 
  render(){
        if(this.state.profileImage){
            var imagestr=this.state.profileImage;
            imagestr1=imagestr.replace("public/", "");
            var profilePic="http://localhost:5000/"+imagestr1;
*/