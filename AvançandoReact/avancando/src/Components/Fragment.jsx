import React from 'react'

function Fragment({propFragment}) {
  return (
    <>
        <h1>titulo</h1>
        <h2>segundo titulo</h2>
        <h2>{propFragment}</h2>
    </>
  )
}

export default Fragment