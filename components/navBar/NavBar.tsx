'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
    const [bars, setBars] = useState(false);

  return (
    <nav className='flex justify-between md:px-14 py-4 md:py-0 font-bold bg-primaryColor text-white fixed z-50 w-full '>
        <div className='flex items-center hover:bg-selectColor px-4  hover:cursor-pointer'>
            <Link href="/" className='flex items-center gap-2'>
                <i className="fa-duotone fa-solid fa-briefcase"></i>
                <h2>Portafolio</h2>
            </Link>
            <button className={`${bars ? "hidden": "md:hidden"} absolute right-4`} onClick={()=>setBars(!bars)}>
                <i className="fa-solid fa-bars text-white text-2xl"></i>
            </button>
            <button className={`${bars ? "md:hidden": "hidden"} absolute right-4`} onClick={()=>setBars(!bars)}>
                <i className="fa-solid fa-x text-white text-2xl"></i>
            </button>
        </div>
        <div className={`w-[100%]  md:w-auto md:flex ${bars ? "md:flex":"hidden"}`}>
            <ul className='flex bg-primaryColor right-0 top-14 md:top-0 w-1/2 flex-col md:flex-row absolute md:relative gap-2 hover:cursor-pointer'>
                <li className='hover:bg-selectColor p-4' onClick={()=>setBars(!bars)}>
                    <Link href="/">Principal</Link>
                </li>
                <li className='hover:bg-selectColor p-4' onClick={()=>setBars(!bars)}>
                    <Link href="/#skills">Habilidades</Link>
                </li>
                <li className='hover:bg-selectColor p-4' onClick={()=>setBars(!bars)}>
                    <Link href="/#proyects">Proyectos</Link>
                </li>
                <li className='hover:bg-selectColor p-4' onClick={()=>setBars(!bars)}>
                    <Link href="/certificados">Certificados</Link>
                </li>
                <li className='hover:bg-selectColor p-4 md:hidden' onClick={()=>setBars(!bars)}>
                    <Link href="/signIn">Iniciar Sesión</Link>
                </li>
            </ul>
        </div>
        <div className={`hover:bg-selectColor hidden p-4 md:flex hover:cursor-pointer ${bars ? "md:flex":"hidden"}`}>
            <Link href="/signIn"></Link>
        </div> 
    </nav>
  )
}

export default NavBar
