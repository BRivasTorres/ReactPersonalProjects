import React from 'react'
import Fields from './Fields'

const Home = () => {
  return (
    <div className='text-[#acadbc] '>
        <h2 className='text-[2rem] text-center'>Goals Year Tracker</h2>
        <p className='font-semibold'>This page is specifically made to keep track of 3 fields in which you would like to improve in the span of a year.</p>
        <Fields />
    </div>
  )
}

export default Home
