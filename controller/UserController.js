const userSchema = require("../model/UserSchema");

exports.createUser =(req,res)=>{

    const user = new userSchema(req.body);

    user.save((err,data)=>{

        if(err){

            res.status(500).json({
                message:"Error in saving data"
            })
        }
        else{

            res.status(201).json({
                data:data,
                message:"Data saved successfully"
            })
        }
    })
}

exports.getAllUsers = (req,res)=>{

    userSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching data"
            })
        }
        else{
            res.status(200).json({
                data:data,
                message:"Data fetched successfully"
            })
        }
    })
}