import React from 'react'

const CheckBox = ({checked, handleClick}) => {
  return (
    <input type={"checkbox"} checked={checked} onChange={() => handleClick()} />
  )
};

export default CheckBox;