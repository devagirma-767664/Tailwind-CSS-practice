import React from 'react'

const Form = () => {
  return (
  <>
    <div className='mx-10 my-5'>
      <h1>Labels and Input Fields</h1>

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2 mt-2' htmlFor="username">Username</label>

        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
         id = 'username'
         type="text"
         placeholder='Username' />

        <label className='block text-gray-700 text-sm font-bold mb-2 mt-2' htmlFor="username">Password</label>

         <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
         id = 'password'
         type="password"
         placeholder='Password' />

         <button className='bg-blue-500 mt-4 px-4 py-1 rounded hover:bg-blue-300 cursor-pointer text-white font-semibold'>Login</button>
      </div>

      <h1>Text Area</h1>

      <div className='mb-4'>

        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="message">Message</label>

        <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none' 
          name="text area" 
          id="message"
          placeholder='Your message here'>
        </textarea>

      </div>

      <h1>Select Dropdown</h1>

      <div className='mb-4'>

        <label className= 'block text-gray-700 text-sm font-bold mb-2' htmlFor="options">Select Options</label>

        <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' name="select" id="options">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>



    </div>
  </>
  )
}

export default Form;
