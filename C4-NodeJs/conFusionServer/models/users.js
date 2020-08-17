let mongoose =require('mongoose')
const router = require('../routes')
let Schema=mongoose.Schema
let User =new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('User',User)