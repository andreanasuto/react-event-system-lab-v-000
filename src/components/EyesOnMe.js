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
      <div>
        <input onSubmit={this.keyUp} type="password"/>
      </div>
    )
  }


}

export default EyesOnMe
