import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex justify-between px-16 font-bold bg-primaryColor text-white '>
        <div className='flex items-center gap-2 hover:bg-selectColor px-4 hover:cursor-pointer'>
            <i className="fa-duotone fa-solid fa-briefcase"></i>
            <h2>Portafolio</h2>
        </div>
        <div>
            <ul className='flex gap-2 hover:cursor-pointer'>
                <li className='hover:bg-selectColor p-4'>
                    <Link href="/">Principal</Link>
                </li>
                <li className='hover:bg-selectColor p-4'>
                    <Link href="#skills">Habilidades</Link>
                </li>
                <li className='hover:bg-selectColor p-4'>
                    <Link href="#">Proyectos</Link>
                </li>
                <li className='hover:bg-selectColor p-4'>
                    <Link href="#">Certificados</Link>
                </li>
            </ul>
        </div>
        <div className='hover:bg-selectColor p-4 hover:cursor-pointer'>
            <Link href="/">Iniciar Sesión</Link>
        </div>
    </nav>
  )
}

export default NavBar
