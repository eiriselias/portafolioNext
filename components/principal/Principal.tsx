import React from 'react'
import Button from '../ui/Button'

const Principal = () => {
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
            <Button className="mt-16">Ver Mi CV</Button>
          </div>
      </div>
  )
}

export default Principal
