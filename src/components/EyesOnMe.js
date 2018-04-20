// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super(props)

    function keyUp () {
      console.log('Entering password...')
    }
  }

  render () {
    return (
      <input type="password"/>
    )
  }


}

export default EyesOnMe
