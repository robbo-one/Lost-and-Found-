import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import {loginError, registerUserRequest} from '../actions/auth'
import { saveLost } from '../actions/lost'

function LostPet (props) {
  
  const [formData, setFormData] = useState(
    {
    name: '',
    species: '',
    photo: '',
  })

  useEffect(() => {
    props.dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.dispatch(saveLost(formData))
    setFormData({photo:""})

  }

  return (
    <form className="Register form box" onSubmit={handleSubmit}>
      <h1 className="title is-2">Please submit a photo of the cat or dog you have lost</h1>
      <hr />
      {props.auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
      
      
      <div className="columns">
        <label className="column is-6 label is-large has-text-centered">Name
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Name" onChange={(e) => handleChange(e)} type="text" name="name" />
        </label>

        <label className="column is-6 label is-large has-text-centered">Species
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Species" onChange={(e) => handleChange(e)} type="text" name="species" />
        </label>

        <label className="column is-6 label is-large has-text-centered">URL for a photo
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="URL for a photo" onChange={(e) => handleChange(e)} type="text" name="photo" />
        </label>
      </div>
      <br />
      <input className="button is-success is-large is-fullwidth" value="Lost" type="submit" />
    </form>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(LostPet)