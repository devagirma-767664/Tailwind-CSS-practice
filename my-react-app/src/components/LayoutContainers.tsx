import React from 'react'

const LayoutContainers = () => {
  return (
    <>
      <h1>Basic Container</h1>

      <div className='container mx-auto px-4'>
        <p>This content is centered and has horizontal padding</p>
      </div>

      <h1>Grid Layout (3 Columns)</h1>

      <div className='grid grid-cols-1 md:col-3 gap-4'>
        <div className='bg-gray-100 p-4 rounded'>Column One</div>
        <div className='bg-gray-100 p-4 rounded'>Column Two</div>
        <div className='bg-gray-100 p-4 rounded'>Column Three</div>
      </div>

      <h1>Flexbox Layout</h1>

      <div className='flex flex-col md:flex-row justify-between items-center bg-blue-100 p-4 rounded mb-10'>
        <div className='mb-2 md:mb-0'>Left Item</div>
        <div>Middle Item</div>
        <div>Right Item</div>
      </div>
    </>
  )
}

export default LayoutContainers;
