'use client'
import Certificados from '@/components/certificados/Certificados'
import React, { useEffect, useState } from 'react'
import { ICertificado} from "@/helpers/certificados.helpers"
import { useParams } from 'next/navigation'
import { getCertificados } from '@/sanity/sanity-utils'

const CertificadoIdPage = () => {

  const params = useParams()  
  const [certificados, setCertificados] = useState<ICertificado | null>(null)

  useEffect(()=>{
    const fetchData = async ()=>{
      const datas: ICertificado[] = await getCertificados()
      const dataCertificado = datas.find((data)=> data._id === params.id)
      setCertificados(dataCertificado || null)
    }
    fetchData()
  },[params.id])

 
   return (
    <>
      {
        certificados && <Certificados {...certificados}/>
      }
    </>
  )

}

export default CertificadoIdPage
