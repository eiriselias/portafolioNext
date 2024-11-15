'use client'
import { useRouter } from "next/navigation"
import Button from "../ui/Button"

const Cv = ()=>{
  const router = useRouter()
  const handleClick = ()=>{
    router.push("/")
  }

  return(
    <div className="h-full relative">
      <object
        data="/documents/Curriculum2024.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
         <div className="absolute flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50 text-white text-center p-4">
          <p>Tu navegador no soporta PDF. Puedes <a href="/documents/Curriculum2024.pdf">descargar el PDF aquí</a>.</p>
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

export default Cv
