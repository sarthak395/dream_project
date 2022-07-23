import React from 'react'
import Search from '../components/Search'

const searchpage = (props) => {
  return (
    <div className="d-flex flex-column min-vh-100">
        <nav>
        <Search props={props} />
      </nav>
    </div>
  )
}

export async function getServerSideProps(context) {
    let data = await fetch(`http://localhost:3000/api/searchbackend?searchterm=${context.query.searchterm}`)
    let myprops = await data.json()
  
    return {
      props: { myprops }, // will be passed to the page component as props
    }
  }

export default searchpage