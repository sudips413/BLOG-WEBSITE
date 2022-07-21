import React from 'react'
import './single.css'
import Sidebar from '../../component/sidebar/Sidebar'
import SinglePost from '../../component/SinglePost/SinglePost'


export default function Single() {
  return (
    <div className='single'>
    <SinglePost/>
    <Sidebar/>
      
    </div>
  )
}
