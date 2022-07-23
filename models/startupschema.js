const mongoose=require('mongoose')

const startupschema=new mongoose.Schema({
    title:String,
    content:String,
    date:String,
    description:String,
    slug:{type:String,unique:true}
},{timestamps:true})

startupschema.index({'$**':"text"})
mongoose.models={} // to prevent overwritting error
export default mongoose.model('Startups',startupschema);