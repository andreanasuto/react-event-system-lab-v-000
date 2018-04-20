// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    function keyUp () {
      console.log('Entering password...')
    }

  render () {
    return (
      <div>
        <input onSubmit={this.keyUp} type="password"/>
      </div>
    )
  }

}

export default Keypad
