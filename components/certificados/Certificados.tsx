'use client'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'
import {ICertificado} from '@/helpers/certificados.helpers'



const Certificados = ({url}:ICertificado) => {

    const router = useRouter()

    const handleClick = ()=>{
        router.push("/certificados")
    }

  return (
    <div className="h-full relative">
      <object
        data={url}
        type="application/pdf"
        className="w-full h-full"
      >
        <p>Tu navegador no soporta PDF. Puedes <a href={url}>descargar el PDF aquí</a>.</p>
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
