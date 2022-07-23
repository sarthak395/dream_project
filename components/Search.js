import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Search = (props) => {
    const [data, setdata] = useState([])
    
    useEffect(()=>{
        setdata(props.props.myprops)
    })

    const [searchterm, setsearchterm] = useState("Search...")

    const change = (e) => {
        setsearchterm(e.target.value)
    }

    return (

        <div>
            {/* To collect data */}
            <form className="d-flex" action={`/?searchterm=${searchterm}`} method='post'>
                <input name="searchterm" className="form-control me-2" type="search" value={searchterm} onChange={change} aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <br />

            {/*  To display data */}
            <div div className="row container">
                {data && data.map((dataitem) => {
                    if (dataitem.talent == "Music") {
                        return (
                            <div className="col-sm-3 mb-5 me-1 ms-5" key={dataitem.slug} >
                                <div className="card h-100" >
                                    <h5 className="card-header">{dataitem.type}</h5>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{dataitem.title}</h5>
                                        <p className="card-text">{dataitem.description}</p>
                                        By <p className="card-text">{dataitem.author}</p>
                                        <Link href={`/eachmusic/${dataitem.slug}`}>
                                            <a className="btn btn-primary mt-auto">Read More</a></Link>
                                    </div>
                                    <p className="card-footer text-muted">{dataitem.date}</p>
                                </div>
                            </div>
                        )
                    }
                    else if (dataitem.talent == "Startup") {
                        return (
                            <div className="col-sm-3 mb-5 me-1 ms-5" key={dataitem.slug}>
                                <div className="card h-100" >
                                    {/* <h5 className="card-header">Featured</h5> */}
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{dataitem.title.charAt(0).toUpperCase()}{dataitem.title.slice(1)}</h5>
                                        <p className="card-text">{dataitem.description.slice(0, 100)}</p>
                                        <Link href={`/eachstartup/${dataitem.slug}`}>
                                            <a className="btn btn-primary mt-auto">Read More</a></Link>
                                    </div>
                                    <p className="card-footer text-muted">{dataitem.date}</p>
                                </div>
                            </div>)
                    }
                }
                )}
            </div>
        </div>
    )
}

export default Search