'use client'
import React from 'react'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

const Enconstrucion = () => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/")
    }
  return (
    <div className='flex flex-col justify-center items-center h-[80vh] relative'>
      <img src="/images/Web-en-Construccion.png" className='h-full' alt="sitio en construccion" />
      <Button onClick={handleClick}  className='absolute bottom-4'>Volver Al Inicio</Button>
    </div>
  )
}

export default Enconstrucion
