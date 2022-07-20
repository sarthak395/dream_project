// To collect startup form data
import startup from '../../models/startupschema'
import connectDb from '../../utils/mongoose'
import { nanoid } from 'nanoid';

async function handler(req, res) {
    if(req.method=='POST')
    {
        const data=req.body
        let newstartup=new startup({
            title:data.title,
            content: data.content,
            description:data.description,
            date:data.date,
            slug:nanoid(), // a unique id
        })
        await newstartup.save()
        res.status(200).json(newstartup)
    }
    else
    {
        res.status(400).json({error:"Bad Request"})
    }
  }

export default connectDb(handler)