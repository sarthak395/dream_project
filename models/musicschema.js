const mongoose=require('mongoose')

const musicschema=new mongoose.Schema({
    title:String,
    content:String,
    date:String,
    author:String,
    description:String,
    slug:{type:String,unique:true},
    type:String
},{timestamps:true})

mongoose.models={} // to prevent overwritting error
export default mongoose.model('Musicpeeps',musicschema);