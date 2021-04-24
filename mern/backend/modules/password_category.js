const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/pms',{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});
var conn=mongoose.Collection;
var passcatSchema=new mongoose.Schema({
   password_category:{
        type:String,
    required:true,
    },
    user_id:{
        type:String,
        required:true
    },
     date:{
         type:Date,
         default:Date.now
     }
});
var passcatModel= mongoose.model('password_category',passcatSchema);
module.exports=passcatModel;

