import React, { Fragment } from 'react'
import styled from 'styled-components'
import Kitten from './Kitten'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  max-width: 1000px;
  margin: 0 auto;
`

const Kittens = (props) => {

  const { kittens } = props

  const kittensList = kittens.map( item => {
    return (
      <Kitten key={item.id} attributes={item.attributes} kittenId={item.id} />
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
