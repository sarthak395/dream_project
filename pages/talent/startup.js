import React, { useState } from 'react'
import Link from 'next/link'

const startup = (props) => {
  const [startups, setstartups] = useState(props.myprops)

  return (
    <main className="d-flex flex-column min-vh-100">
      <div className="container mb-5">

        <h2 className="display-4 mb-4"> Some Already Published Innovations {' '}
          <small className="text-muted display-6">Wanna Contribute ??</small>
        </h2>

        <div className="row">
          {/* To display data */}
          {startups.map((startup) => {
            return (
              <div className="col-sm-3" key={startup.slug}>
                <div className="card h-100" >
                  {/* <h5 className="card-header">Featured</h5> */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{startup.title.charAt(0).toUpperCase()}{startup.title.slice(1)}</h5>
                    <p className="card-text">{startup.description.slice(0,100)}</p>
                    <Link href={`/eachstartup/${startup.slug}`}>
                      <a className="btn btn-primary mt-auto">Read More</a></Link>
                  </div>
                  <p className="card-footer text-muted">{startup.date}</p>
                </div>
              </div>)
          })}
        </div>


      </div>

      {/* Form To add a startup */}
      <div className="container">
        <h2 className="display-4"> Time for your Own Innovations {' '}
          <small className="text-muted display-6">Wanna Innovate ??</small>
        </h2>
        <form className="form-floating" action='/api/addstartup' method='post'>
          <input type='text' name="title" className="mb-3" placeholder='Add Title' required></input><br />
          <input type='text' name="description" className="mb-3" placeholder='Add Description' required></input><br />
          <h4>Add date</h4>
          <input type='date' name="date" className="date mb-3" placeholder='Add Date' required></input><br />
          <textarea name="content" placeholder='Add Content' rows='10' cols='100'></textarea><br />
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/Allstartups')
  let myprops = await data.json()

  return {
    props: { myprops }, // will be passed to the page component as props
  }
}

export default startup