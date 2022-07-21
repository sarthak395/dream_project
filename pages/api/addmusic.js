import musician from '../../models/musicschema'
import connectDb from '../../utils/mongoose'
import { nanoid } from 'nanoid';

async function handler(req,res){
    
    if(req.method=='POST')
    {
        const data=req.body
        let newmusician=new musician({
            title:data.title,
            content: data.content,
            description:data.description,
            date:data.date,
            author:data.author,
            type:req.query.type,
            slug:nanoid(), // a unique id
        })
        await newmusician.save()
        res.status(200).json(newmusician)
    }
    else
    {
        res.status(400).json({error:"Bad Request"})
    }
}

export default connectDb(handler)