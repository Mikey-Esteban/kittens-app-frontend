import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Kittens from './Kittens/Kittens'

const Home = () => {

  const [ kittens, setKittens ] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3000/api/v1/kittens')
      .then( resp => {
        setKittens(resp.data.data)
      })
      .catch( resp => console.log(resp) )
  }, [kittens.length])


  return (
    <Fragment>
      <Kittens kittens={kittens} />
    </Fragment>
  )
}

export default Home
