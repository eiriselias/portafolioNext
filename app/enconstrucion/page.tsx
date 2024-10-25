'use client'
import React from 'react'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

const EnconstrucionPage = () => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push("/")
    }
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <img src="/images/Web-en-Construccion.png" alt="sitio en construccion" />
      <Button onClick={handleClick}  className='absolute bottom-4'>Volver Al Inicio</Button>
    </div>
  )
}

export default EnconstrucionPage
