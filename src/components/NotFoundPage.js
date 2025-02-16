import { div } from 'framer-motion/client'
import React from 'react'

function NotFoundPage() {
  return (
    <>
    <div className='mx-96'>
    <div className='flex flex-col items-center justify-center mt-52 bg-slate-50 h-72'>
      <h1 className='font-extrabold'>404 - Page Not Found</h1>
      <p className='font-bold mt-3'>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className='text-green-700 underline mt-5'>Go to Home</a>
    </div>
    </div>
    </>
  )
}

export default NotFoundPage
