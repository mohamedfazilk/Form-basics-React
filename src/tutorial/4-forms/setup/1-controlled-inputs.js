import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [people, setPeople] = useState([]);

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(name && email ){
      const person= {id: new Date().getTime().toString(),  name, email}
      setPeople([...people, person]);
      console.log(person);
      setName('');
      setEmail('');
    }
    else{
      return null
    }
    console.log(email,name);
  }
const handleEvent =(e) =>{
 setEmail(e.target.value)
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
           onChange={(e)=>setName(e.target.value)}
           />
        </div>

        <div className="form-control">
          <label htmlFor="firstName">Email: </label>
          <input type="email"
           id='email'
           name='email'
           value={email}
           onChange={handleEvent}
          
           />
        </div>

        <button type='submit'>add person</button>
      </form>

      {people.map((person,index)=>{
        const {id,name,email} = person
        return(
         <article className='item' key={id}>
           <h4>{name}</h4>
           <h4>{email}</h4>
         </article>
        )
      })}
    </article>
    </>
  ) 
}

export default ControlledInputs;
