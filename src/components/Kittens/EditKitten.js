import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'

const Field = styled.div`
  display: flex;

  .name-input {
    margin: 0 0 10px 0;
    width: 100%;
  }
  .cuteness-input {
    margin-bottom: 14px;
  }

  label, input {
    margin: 7px 0;
  }

  input {
    border: none;
    border-radius: 4px;
    margin-left: 3px;
    padding-left: 5px;
    width: 10%;

    font-family: 'Architects Daughter', cursive;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  .fa-icon {
    margin-right: 5px;
    cursor: pointer;
    transition: all ease-in-out 150ms;
  }
  .fa-icon:hover {
    color: red;
  }
`

const EditKitten = (props) => {

  return (
    <div>[Edit Kitten Component]
      <form action="">
        <Field>
          <input className="name-input" type="text"
            name="name" placeholder={props.attributes.name} onChange={props.handleChange} />
        </Field>

        <Field>
          <label htmlFor="age">Age</label>
          <input type="text"
            name="age" placeholder={props.attributes.age} onChange={props.handleChange} />
        </Field>

        <Field>
          <label htmlFor="softness">Softness rating</label>
          <input type="text"
            name="softness" placeholder={props.attributes.softness} onChange={props.handleChange} />
        </Field>

        <Field>
          <label htmlFor="cuteness">Cuteness rating</label>
          <input className="cuteness-input" type="text"
            name="cuteness" placeholder={props.attributes.cuteness} onChange={props.handleChange} />
        </Field>
      </form>
      <ButtonsWrapper>
        <FontAwesomeIcon onClick={props.handleSubmit} className="fa-icon" icon={faSave} />
        <FontAwesomeIcon onClick={props.handleCancel} className="fa-icon" icon={faTimes} />
      </ButtonsWrapper>
    </div>
  )
}

export default EditKitten
