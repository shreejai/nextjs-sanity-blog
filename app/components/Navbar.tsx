import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
      <Link href="/" className='font-bold text-3xl'>
      SJ<span className='text-blue-400'>BLOG</span>
      </Link>
      <div>menu</div>
    </div>
  )
}

export default Navbar