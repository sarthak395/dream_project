import React, { useState, useEffect } from 'react'
import Highlighter from "react-highlight-words";
import Link from 'next/link'
import { useRouter } from 'next/router'

const Search = (props) => {

    const [searchterm, setsearchterm] = useState("Search...")
    const [data, setdata] = useState([])
    const router = useRouter();

    useEffect(() => {
        setdata(props.props.myprops)
    })

    const change = (e) => {
        setsearchterm(e.target.value)
        if (router.isReady) {
            router.push(`/searchpage?searchterm=${searchterm}`)
        }
    }

    return (

        <div>
            {/* To collect data */}
            <form className="d-flex" action={`/searchpage?searchterm=${searchterm}`} method='post'>
                <input name="searchterm" className="form-control me-2" type="search" onChange={change} value={searchterm} aria-label="Search" />
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
                                    <h5 className="card-header">
                                        <Highlighter
                                            searchWords={[`${props.props.searchterm}`]}
                                            autoEscape={true}
                                            textToHighlight={dataitem.type}
                                        />
                                    </h5>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">
                                            <Highlighter
                                                searchWords={[`${props.props.searchterm}`]}
                                                autoEscape={true}
                                                textToHighlight={dataitem.title}
                                            />
                                        </h5>
                                        <p className="card-text">
                                            <Highlighter
                                                searchWords={[`${props.props.searchterm}`]}
                                                autoEscape={true}
                                                textToHighlight={dataitem.description}
                                            />
                                        </p>
                                        By <p className="card-text">
                                            <Highlighter
                                                searchWords={[`${props.props.searchterm}`]}
                                                autoEscape={true}
                                                textToHighlight={dataitem.author}
                                            />
                                        </p>
                                        <Link href={`/eachmusic/${dataitem.slug}`}>
                                            <a className="btn btn-primary mt-auto">Read More</a></Link>
                                    </div>
                                    <p className="card-footer text-muted">
                                        <Highlighter
                                            searchWords={[`${props.props.searchterm}`]}
                                            autoEscape={true}
                                            textToHighlight={dataitem.date}
                                        />
                                    </p>
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
                                        <h5 className="card-title">
                                            <Highlighter
                                                searchWords={[`${props.props.searchterm}`]}
                                                autoEscape={true}
                                                textToHighlight={`${dataitem.title.charAt(0).toUpperCase()}${dataitem.title.slice(1)}`}
                                            />
                                        </h5>
                                        <p className="card-text">
                                            <Highlighter
                                                searchWords={[`${props.props.searchterm}`]}
                                                autoEscape={true}
                                                textToHighlight={dataitem.description.slice(0, 100)}
                                            /></p>
                                        <Link href={`/eachstartup/${dataitem.slug}`}>
                                            <a className="btn btn-primary mt-auto">Read More</a></Link>
                                    </div>
                                    <p className="card-footer text-muted">
                                        <Highlighter
                                            searchWords={[`${props.props.searchterm}`]}
                                            autoEscape={true}
                                            textToHighlight={dataitem.date}
                                        /></p>
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