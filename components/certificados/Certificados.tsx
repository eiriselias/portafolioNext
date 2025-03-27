'use client'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'
import {ICertificado} from '@/helpers/certificados.helpers'
import { useSEO } from '@/hooks/useSEO'



const Certificados = ({url, name}:ICertificado) => {

    const router = useRouter()
    useSEO(`${name} - Certificado`,`Certificado de estudio ${name}`)

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
        <div className="absolute flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50 text-white text-center p-4">
          <p>Tu navegador no soporta PDF. Puedes <a href={url}>descargar el PDF aquí</a>.</p>
        </div>
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
