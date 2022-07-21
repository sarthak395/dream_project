import music from '../../models/musicschema'
import connectDb from '../../utils/mongoose'

async function handler(req,res){
    
    const slug=req.query.slug
    let musicdata=await music.findOne({slug:slug})
    
    res.status(200).json(musicdata)
}

export default connectDb(handler)