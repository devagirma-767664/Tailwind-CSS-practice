import React, { useState } from 'react'

const Dashboard = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className='flex h-screen bg-gray-200'>

      <aside className={`${sideBarOpen ? 'block' : 'hidden'} md:block w-60 bg-gray-800 text-white`}>

        <div className='p-6'>
          <h1 className='text-2xl font-bold mt-12'>Dashboard</h1>
        </div>

        <nav className='mt-6'>
          <a href="#" className='block px-6 py-3 hover:bg-gray-700'>Home</a>

          <a href="#" className='block px-6 py-3 hover:bg-gray-700'>Analytics</a>

          <div>
            <a href="#" className='block px-6 py-3 hover:bg-gray-700'>Reports</a>

              <label className='text-sm block mx-10 mb-2' htmlFor="Select">Select report form</label>

              <select className='block text-sm bg-gray-800 mx-10 px-5 py-1 border border-gray-600 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                <option>Images</option>
                <option>Charts</option>
                <option>Document</option>
              </select>
          </div>

          <a href="#" className='block px-6 py-3 hover:bg-gray-700'>Settings</a>
        </nav>

      </aside>

      <div className='flex-1 flex flex-col'>

        <header className='bg-gray-800 p-2
        '>

          <div className='flex items-center justify-between px-6 py-4'>
            <button onClick={() => setSideBarOpen(!sideBarOpen)} className='md:hidden text-white hover:text-gray-900 cursor-pointer'>
              <svg className='w-6 h-6 '
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path 
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>

            <h2 className='text-3xl font-bold text-white'>Welcome to Dashboard</h2>

            <input className='shadow appearance-none border rounded-2xl w-60 py-1 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              placeholder='Search' />

            <button className='text-gray-800 font-semibold bg-gray-300 rounded px-4 py- hover:bg-gray-400 cursor-pointer'>Logout</button>

          </div>
        </header>

        <div className='grid grid-cols-3 md: grid-cols-1gap-5 justify-between m-7 '>

          <div className='bg-white rounded-lg shadow p-6 w-70 h-100 m-7'>
            <h3 className='text-lg font-semibold text-gray-800 mb-50'>Card One</h3>
            <p className='text-gray-600'>This is a responsive card that adapts to screen size.</p>
          </div>

          <div className='bg-white rounded-lg shadow p-6 w-70 h-100 m-7'>
            <h3 className='text-lg font-semibold text-gray-800 mb-50'>Card Two</h3>
            <p className='text-gray-600'>This is a responsive card that adapts to the screen size</p>
          </div>

          <div className='bg-white rounded-lg shadow p-6 w-70 h-100 m-7'>
            <h3 className='text-lg font-semibold text-gray-800 mb-50'>Card Three</h3>
            <p className='text-gray-600'>This is a responsive card that adapts to the screen size</p>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Dashboard
