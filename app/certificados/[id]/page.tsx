import Certificados from '@/components/certificados/Certificados'
import React from 'react'
import {certificadosData} from "@/helpers/certificados.helpers"

const CertificadoIdPage:React.FC <{params:{id: string}}> = async ({params}) => {

  const {id} = await params
  const datas = certificadosData

  const dataCertificado = datas.find((data)=> data.id.toString() === id)

  return (
    <>
      {
        dataCertificado && <Certificados {...dataCertificado}/>
      }
    </>
  )

}

export default CertificadoIdPage
