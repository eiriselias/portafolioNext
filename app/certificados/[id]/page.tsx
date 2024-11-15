'use client'
import Certificados from '@/components/certificados/Certificados'
import React from 'react'
import {certificadosData, ICertificado} from "@/helpers/certificados.helpers"
import { useParams } from 'next/navigation'

const CertificadoIdPage= () => {

  const params = useParams()

  const datas: ICertificado[] = certificadosData

  const dataCertificado = datas.find((data)=> data.id === Number(params.id))

  return (
    <>
      {
        dataCertificado && <Certificados {...dataCertificado}/>
      }
    </>
  )

}

export default CertificadoIdPage
