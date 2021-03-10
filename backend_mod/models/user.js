const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        lowercase:true
    },
    lastname:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
   blogArray:[
       {
        title:{
            type:String,
             required:true
        },
        data:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        }
    }
   ]
});

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;