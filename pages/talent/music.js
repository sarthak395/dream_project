import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const music = (props) => {

  const [musics, setmusics] = useState(props.myprops)

  const [show, setshow] = useState([false, false])
  const toggle = (e) => {
    let id = e.target.id;
    let newshow = [...show];

    newshow[id] = !show[id]
    setshow(newshow)
  }

  return (
    <main className="d-flex flex-column min-vh-100">
      {/* we have to create 3 links to other pages , one as a lyricist , one as a instrumentialist and one as a producer based on what the user will select */}
      <div className="container mb-5">

        <h2 className="display-4 mb-4"> Some Already Published Melodies {' '}
          <small className="text-muted display-6">Wanna Contribute ??</small>
        </h2>

        <div className="row container">
          {/* To display data */}
          {musics.map((music) => {
            if (music.type == "lyricist") {
              return (
                <div className="col-sm-3 mb-5 me-1 ms-5" >
                  <div className="card h-100" >
                    <h5 className="card-header">{music.type}</h5>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{music.title}</h5>
                      <p className="card-text">{music.description}</p>
                      By <p className="card-text">{music.author}</p>
                      <Link href={`/eachmusic/${music.slug}`}>
                        <a className="btn btn-primary mt-auto">Read More</a></Link>
                    </div>
                    <p className="card-footer text-muted">{music.date}</p>
                  </div>
                </div>
              )
            }
            else {
              return (
                <div className="col-sm-3 mb-5 me-1 ms-5" >
                  <div className="card h-100" >
                    <h5 className="card-header">{`${music.type.charAt(0).toUpperCase()}${music.type.slice(1)}`}</h5>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{music.title}</h5>
                      <p className="card-text">{music.description}</p>
                      By <p className="card-text">{music.author}</p>
                        <a href={music.content} className="btn btn-primary mt-auto">Listen</a>
                    </div>
                    <p className="card-footer text-muted">{music.date}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>

      </div>

      <hr />

      <div className="add">
        <h1 className={styles.title}>
          Who are you??? !!
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <a>
              <h2 id={0} onClick={toggle}>Lyricist &rarr;</h2>
              <p>Share a snippet of Your Poetry ... Maybe you find someone</p>
            </a><hr />
            <div className="form" style={{ display: show[0] ? "block" : "none" }}>
              <form className="form-floating" action='/api/addmusic?type=lyricist' method='post'>
                <input type='text' name="title" className="mb-3" placeholder='Add Title' required></input><br />
                <input type='text' name="author" className="mb-3" placeholder='Add Author Name' required></input><br />
                <input type='text' name="description" className="mb-3" placeholder='Add Description' required></input><br />
                <h4>Add date</h4>
                <input type='date' name="date" className="date mb-3" placeholder='Add Date' required></input><br />
                <textarea name="content" placeholder='Add Content' rows='10' cols='50'></textarea><br />
                <button className="btn btn-primary" type="submit">Submit form</button>
              </form>
            </div>
          </div>

          <div className={styles.card}>
            <a>
              <h2 id={1} onClick={toggle}>Instrumentialist and Vocal &rarr;</h2>
              <p>Share a link to your Music Video or Audio</p>
            </a>
            <div className="form" style={{ display: show[1] ? "block" : "none" }}>
              <form className="form-floating" action='/api/addmusic?type=instrumentialist' method='post'>
                <input type='text' name="title" className="mb-3" placeholder='Add Title' required></input><br />
                <input type='text' name="author" className="mb-3" placeholder='Add Author Name' required></input><br />
                <input type='text' name="description" className="mb-3" placeholder='Add Description' required></input><br />
                <h4>Add date</h4>
                <input type='date' name="date" className="date mb-3" placeholder='Add Date' required></input><br />
                <input name="content" placeholder='Add Link' type='text'></input><br /><br />
                <button className="btn btn-primary" type="submit">Submit form</button>
              </form></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/getallmusics')
  let myprops = await data.json()

  return {
    props: { myprops }, // will be passed to the page component as props
  }
}

export default music