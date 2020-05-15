import React from 'react';

const CheckBox = () => {
  return (
    <input
      name="isInList"
      type="checkbox"
      checked={this.state.isInList}
      onChange={this.handleInputChange}/>
  )
};

export default CheckBox;