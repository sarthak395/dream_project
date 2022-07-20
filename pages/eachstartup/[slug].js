import React from 'react'

const slug = (props) => {

  return (
    <div className='text-center d-flex flex-column min-vh-100'>
      <h1 className='mb-3'>{`${props.myprops.title.charAt(0).toUpperCase()}${props.myprops.title.slice(1)}`}</h1>
      <hr/>
      <p>{props.myprops.content}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  
  let data = await fetch(`http://localhost:3000/api/singlestartup?slug=${context.query.slug}`)
  let myprops=await data.json()
  return {
    props: {myprops}, // will be passed to the page component as props
  }
}

export default slug