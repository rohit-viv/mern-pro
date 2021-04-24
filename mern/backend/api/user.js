var express = require('express');
var router = express.Router();
var userModel=require('../modules/user');
const bcrypt = require('bcrypt');
const mongoose=require("mongoose");
var multer = require('multer');
var cheackauth = require('./middileware/auth');
var jwt = require('jsonwebtoken');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}
var upload = multer({
    storage: storage,
    limits: {
        filesize: 1024 * 1204 * 5
    }
})

/* image Path
limit:5mb
filter:png jpg jpeg */
router.post('/login',function(req,res,next){
    var username=req.body.username;
    userModel.find({username:username})
    .exec()
    .then(user=>{
        if(user.length<1){
            res.json({
                message:"User name and password not found.." ,
                
            });
        }
        else{
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                if(err){
                    res.json({
                        message:"User name and password not found.." ,
                    });
                }
                if(result){
                   var token=jwt.sign({
                       username:user[0].username, 
                       userid:user[0]._id
                    },
                    'secret',{
                        expiresIn:'10h'
                    }
                    )
                    res.status(200).json({
                        message:"User Found.." ,
                        token:token
               
                       });
                    }
                    else{
                        res.json({
                            message:"User name and password not found.." ,
                        });
                    }
            });
    }
         }).catch(err=>{
                     res.json({
                         error:err
                     });
        });
    });
                 
 router.post('/signup',function(req,res,next){
        //console.log(req.file);
        var username=req.body.username;
        var email=req.body.email;
        var password=req.body.password;
        var confirmpassword=req.body.confirmpassword;
        if(password !==confirmpassword){
            res.json({
                message:"Password and Confirm Password Does Not Matched..",  
              });
 
        }else{
            bcrypt.hash(password, 10 , function(err, hash) {
                if(err){
                    return res.json({
                        message:"something Wrong !",
                        error:err
                    });
                }
                else{
                    var user_details=new userModel({
                        _id:mongoose.Types.ObjectId(),
                         username: username,
                         email:email,
                         password:hash
                 
                     });
                     user_details.save().then(doc=>{
                         res.status(201).json({
                             message:"User Registered successfully..",
                             result:doc  
                           });
                 
                     }).catch(err=>{
                         res.json(err)
                     });
                     
                }
            });
            
        }
        
    });
    router.get('/getUserDetails/:userid',cheackauth,function(req,res,next){
        var id=req.params.userid;
        var getUserDetails=userModel.find({_id:id},{'email':1,'profileImage':1});
        getUserDetails.exec().then(data=>{
        res.status(200).json({
            message:"Ok",
            result:data  
          })
    }).catch(err=>{
        res.json(err);
    });
    });
    router.post('/update-profile/',upload.single('profileImage'),cheackauth,function(req,res,next){
        var id=req.body.user_id;
        var profilePic=req.file.path;
        userModel.findById(id,function(err,data){
            data.profileImage=profilePic?profilePic:data.profileImage;
            data.save().then(doc=>{
                res.status(201).json({
                    message:"Profile Image updated successfully..",
                    result:doc  
                  });
    
            }).catch(err=>{
                res.json(err)
            })
        });
      
    });
    module.exports = router;