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
        data="/documents/CV2022ConLink.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <p>Tu navegador no soporta PDF. Puedes <a href="/documents/CV2022ConLink.pdf">descargar el PDF aquí</a>.</p>
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
