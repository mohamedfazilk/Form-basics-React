import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('')
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log('hello');
  }
  return(
    <>
    <article>
      <form className='form' onSubmit={handleSubmit}>

        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text"
           id='firstName'
           name='firstName'
           value={name}
           />
        </div>

        <div className="form-control">
          <label htmlFor="firstName">Email: </label>
          <input type="email"
           id='email'
           name='email'
           value={email}
           />
        </div>

        <button type='submit'>add person</button>
      </form>
    </article>
    </>
  ) 
}

export default ControlledInputs;
