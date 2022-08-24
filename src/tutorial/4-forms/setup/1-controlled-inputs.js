import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  return(
    <>
    <article>
      <form className='form'>

        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id='firstName' name='firstName' />
        </div>

        <div className="form-control">
          <label htmlFor="firstName">Email: </label>
          <input type="email" id='email' name='email' />
        </div>

        <button type='button'>add person</button>
      </form>
    </article>
    </>
  ) 
}

export default ControlledInputs;
