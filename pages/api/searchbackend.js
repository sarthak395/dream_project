// http://localhost:3000/api/searchbackend?
import connectDb from '../../utils/mongoose'
import music from '../../models/musicschema'
import startup from '../../models/startupschema'
import router from 'next/router'



async function handler(req, res) {
    
    const searchterm = req.query.searchterm
    if (searchterm != '') {
        var data = await music.find({ $or: [{ "author": { '$regex': `${searchterm}`, '$options': 'i' } }, { "title": { '$regex': `${searchterm}`, '$options': 'i' } }, { "description": { '$regex': `${searchterm}`, '$options': 'i' } }, { "type": { '$regex': `${searchterm}`, '$options': 'i' } },{ "date": { '$regex': `${searchterm}`, '$options': 'i' } }] })
        data.forEach((dataitem) => { dataitem._doc.talent = "Music" })

        let data2 = await startup.find({ $or: [{ "title": { '$regex': `${searchterm}`, '$options': 'i' } }, { "description": { '$regex': `${searchterm}`, '$options': 'i' } }, { "date": { '$regex': `${searchterm}`, '$options': 'i' } }] })
        data2.forEach((dataitem) => { dataitem._doc.talent = "Startup" })

        data = [...data, ...data2]
        res.status(200).json(data)
    }
    else
    {
        res.status(200).json([])
    }
}

export default connectDb(handler)