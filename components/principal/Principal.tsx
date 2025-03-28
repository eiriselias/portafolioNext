'use client'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

const Principal = () => {
  const router = useRouter()
  const handelClick = ()=>{
    router.push("/cv")
  }
  return (
    <div className='bg-[url("/images/background.jpg")] bg-cover bg-center w-full h-full relative'>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-white p-4 flex flex-col items-center justify-center h-full">
            <div className='w-60 h-60 rounded-full overflow-hidden mb-4 opacity-80 hover:opacity-100'>
              <img 
                src="/images/eirisPhoto.jpg" 
                alt={`Foto perfil`} 
                className='h-full w-full object-cover'
              />
            </div>        
            <h1 className='font-bold text-4xl'>Eiris Salazar</h1> 
            <p className='text-xl'>Full Stack Developer</p>
            <div className='flex gap-4 mt-4'>
              <img src="https://github-readme-stats.vercel.app/api?username=eiriselias&show_icons=true&theme=radical" alt="Estadísticas de GitHub"  className='h-40'/>
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eiriselias&layout=compact&theme=radical" alt="Top Lenguajes" className='h-40'/>
            </div>
            <Button onClick={ handelClick } className="mt-16">Ver Mi CV</Button>
          </div>
      </div>
  )
}

export default Principal
