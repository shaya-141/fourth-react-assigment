import React, { useEffect, useState } from 'react'
import searchImg from "../assets/searchblack.png"
import logoImg from "../assets/shopping-bag.png"

function Navbar({searchFunctionality}) {


  return (
    <nav className='w-[100%] h-[70px] relative flex items-center justify-between pl-4 pr-4 '>
        <h1 id='heading' className='font-bold'><img src={logoImg} alt="" /> Ecommerce</h1>

      <input onChange={(e)=> searchFunctionality(e)} type="text" className='w-[35%] h-[40px] px-4 py-2 border border-black rounded-3xl' />
      <img src={searchImg} className='h-5 absolute right-8' alt="" />
    </nav>
  )
}

export default Navbar