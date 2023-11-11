import React from 'react'

const BlocoDeFerramentasMultiplas = ({ nameDiv, setDados }) => {
  return (
    <div>
      <label>{nameDiv}</label>
      <input
        type="text"
        onChange={(event) => {
          setDados(event.target.value);
        }}
      />
    </div>
  )
}

export default BlocoDeFerramentasMultiplas