import music from '../../models/musicschema'
import connectDb from '../../utils/mongoose'

async function handler(req,res){
    
    let musicdata= await music.find()
    res.status(200).json(musicdata)
}

export default connectDb(handler)