import Head from 'next/head'
import Image from 'next/image'
import Sidebar from './sidebar' 
import Buy from './buy'

export default function Home() {
  return (
    <div className='bg-main_white'>
      <div>
        {/* <input className='text-center' style={{marginLeft:'30em', marginTop:'5em'}} placeholder='type to search'/> */}
        <Buy/>
        {/* <Sidebar/> */}
      </div>
    </div>
  )
}
