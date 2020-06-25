import React from 'react';

const SearchInput = props => {

  return (
    <>
      <label>Search a number</label>
      <input 
        value={props.value} 
        type="text" 
        onChange={event => {
          props.onSearchValueChange(event.target.value)
        }}
        onKeyUp={event => {
          if (event.keyCode === 13) {
            props.onEnter()
          }
        }} 
      />
    </>
  )

}


export default SearchInput;