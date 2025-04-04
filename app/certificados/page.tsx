
import {certificadosData, ICertificado} from "@/helpers/certificados.helpers"
import { getCertificados } from "@/sanity/sanity-utils"
//import { useSEO } from "@/hooks/useSEO"
import Link from "next/link"

const CertificadosPage = async() => {

   const datas:ICertificado[] = await getCertificados();

   //useSEO("certificados","lista de certificados de estudios");

   return (
     <div className="flex flex-col items-center mt-16">
        <h2 className="font-bold text-xl my-4">Certificados</h2>  
        <div className="grid md:grid-cols-2 w-full justify-items-center">
         <div className="w-96 hidden md:flex h-96 overflow-hidden">
            <img src="/images/graduacion.png" alt="Gorro graduacion" className="w-full h-full object-cover"/>
         </div>
        <div className="w-full md:w-[80%] flex flex-col">        
         {
               datas && datas.slice().reverse().map((data)=>{
                  return (
                     <Link
                        href={`/certificados/${data._id}`}
                        className="w-full bg-white py-2 px-8 mb-2 hover:bg-primaryColor hover:text-white hover:font-bold flex justify-between"
                        key={data._id}
                     >
                        <p>{data.name}</p>
                        <p>{data.entity}</p>
                     </Link>
                  )
               })
         }
        </div>
        </div>
     </div>
  )
}

export default CertificadosPage
