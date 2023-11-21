import React from 'react'

export default function Button(props) {
  return (
    <div className='bg-indigo-400 text-white font-[poppins] my-4 py-2 px-6 rounded md:ml-8 hover:bg-indigo-800 duration-800'>{props.children}</div>
  )
}
