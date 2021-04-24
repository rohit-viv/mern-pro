var passcatModule=require('../../modules/password_category');
var passdetailModule=require('../../modules/add_password');
const mongoose=require("mongoose");
exports.getcategory=(req,res,next)=>{
    var id=req.params.userid;
    var getpasscat=passcatModule.find({user_id:id},{'password_category':1,'_id':1});
    /*getpasscat.exec(function(err,data){
        if(err) throw err;
        //res.send(data);
        res.status(200).json({
          message:"success",
          result:data  
        })
})*/
getpasscat.exec().then(data=>{
    res.status(200).json({
        message:"Ok",
        result:data  
      })
}).catch(err=>{
    res.json(err);
})
}
exports.addcategory=(req,res,next)=>{
    var add_category=req.body.add_cat;
    var user_id=req.body.user_id;
    var pass_details=new passcatModule({
        password_category:add_category,
        user_id:user_id
    });
    /*pass_details.save(function(err,doc){
        if(err) throw err;
        //res.send('data  inserted successfully...');
        res.status(201).json({
            message:"Record Inserted successfully..",
            result:doc  
          });
    });*/
    pass_details.save().then(doc=>{
        res.status(201).json({
            message:"Record Inserted successfully..",
            result:doc  
          });

    }).catch(err=>{
        res.json(err)
    });
    
}

exports.updatecategory=(req,res,next)=>{
    var id=req.body._id;
    var passcategory=req.body.add_cat;
    passcatModule.findById(id,function(err,data){
        data.password_category=passcategory?passcategory:data.password_category;
       /* data.save(function(err,doc){
            if(err) throw err;
            //res.send('updates successfully..');
            res.status(201).json({
                message:"Record updated successfully..",
                result:doc  
              });
        });*/
        data.save().then(doc=>{
            res.status(201).json({
                message:"Record updated successfully..",
                result:doc  
              });

        }).catch(err=>{
            res.json(err)
        })
    });
  
}

exports.adddeletecategory=(req,res,next)=>{
    var id=req.body._id;
    /*passcatModule.findByIdAndDelete(id,function(err){
        if(err) throw err;
        res.send('Record deleted...');
    })*/
    passcatModule.findByIdAndDelete(id).then(doc=>{
        res.status(201).json({
            message:"Record deleted successfully..",
            result:doc  
          });

    }).catch(err=>{
        res.json(err)
    })
    
}