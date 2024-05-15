import React from 'react'

// function based component
const Age = (props) => {
    console.log(props);
  return (
    <div>
      <h3>{props.number}</h3>
    </div>
  )
}

export default Age;