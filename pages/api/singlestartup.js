// Backend api to fetch from a startup
import startup from '../../models/startupschema'
import connectDb from '../../utils/mongoose'

async function handler(req,res){
    
    const slug=req.query.slug
    let startupdata= await startup.findOne({slug:slug})
    
    res.status(200).json(startupdata)
}

export default connectDb(handler)