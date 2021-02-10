import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Kitten from './Kitten'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  max-width: 1000px;
  margin: 0 auto;
`

const Kittens = () => {

  const [ kittens, setKittens ] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3000/api/v1/kittens')
      .then( resp => {
        setKittens(resp.data.data)
      })
      .catch( resp => console.log(resp) )
  }, [kittens.length])

  const handleDelete = (id) => {
    console.log('ohhhh you pressed the delete icon');
    axios.delete(`http://localhost:3000/api/v1/kittens/${id}`)
      .then( resp => {
        const newKittens = kittens.filter(item => item.id !== id)
        setKittens(newKittens)
      })
      .catch( resp => console.log(resp) )
  }

  const kittensList = kittens.map( item => {
    return (
      <Kitten key={item.id} attributes={item.attributes} kittenId={item.id} handleDelete={handleDelete} />
    )
  })

  return (
    <Fragment>
      [ Kittens component ]
      <Wrapper>
        { kittensList }
      </Wrapper>
    </Fragment>
  )
}

export default Kittens
