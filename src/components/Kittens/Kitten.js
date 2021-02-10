import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import EditKitten from './EditKitten'

const Card = styled.div`
  background: #efefef;
  border: 1px solid #fff;
  border-radius: 10px;

  padding: 10px 20px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .fa-icon {
    margin-right: 5px;
    cursor: pointer;
    transition: all ease-in-out 150ms;
  }
  .fa-icon:hover {
    color: red;
  }
`

const Kitten = (props) => {

  const [ edit, setEdit ] = useState(false)
  const [ kitten, setKitten ] = useState(props.attributes)

  const handleEdit = () => {
    setEdit(true)
  }

  const handleCancel = () => {
    setEdit(false)
  }

  const handleChange = e => {
    console.log('name:', e.target.name, 'value:', e.target.value);
    setKitten({...kitten, [e.target.name]:e.target.value})
    console.log(kitten);
  }

  const handleSubmit = e => {
    e.preventDefault()
    const id = props.kittenId
    axios.patch(`http://localhost:3000/api/v1/kittens/${id}`, { kitten: kitten })
      .then( resp => {
        setKitten(kitten)
        setEdit(false)
      })
      .catch( resp => console.log(resp) )
  }

  return edit ?
  (
    <Card>
      <EditKitten attributes={props.attributes} handleCancel={handleCancel}
        handleChange={handleChange} handleSubmit={handleSubmit}
      />
    </Card>
  ) :
  (
    <Card>
      <h3>{kitten.name}</h3>
      <p>Age {kitten.age}</p>
      <p>Softness rating {kitten.softness}</p>
      <p>Cuteness rating {kitten.cuteness}</p>
      <ButtonsWrapper>
        <FontAwesomeIcon onClick={handleEdit} className="fa-icon" icon={faEdit} />
        <FontAwesomeIcon onClick={() => props.handleDelete(props.kittenId)} className="fa-icon" icon={faTrash} />
      </ButtonsWrapper>
    </Card>
  )
}

export default Kitten
