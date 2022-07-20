// To display all startups , we create a api route
import startup from '../../models/startupschema'
import connectDb from '../../utils/mongoose'

const handler=async(req,res)=>{
    const allstartups=await startup.find()
    res.status(200).json(allstartups)
}

export default connectDb(handler)