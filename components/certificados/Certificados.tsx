'use client'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

const Certificados = () => {

    const router = useRouter()

    const handleClick = ()=>{
        router.push("/")
    }

  return (
    <div className="h-full relative">
      <object
        data="/documents/Curriculum2024.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <p>Tu navegador no soporta PDF. Puedes <a href="/documents/Curriculum2024.pdf">descargar el PDF aquí</a>.</p>
      </object>
      <Button className="absolute right-8 bottom-4"
        onClick={handleClick}
      >
        Volver
      </Button>
    </div>
  )
}

export default Certificados
