import React from 'react'
import Navbar from '../navbar'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-custom-header bg-cover bg-center h-[726px] w-full ">
    <Navbar/>
  </header>
  )
}