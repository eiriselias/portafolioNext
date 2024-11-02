'use client'
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {

    const router = useRouter()

    const handleBack = ()=>{
        router.push("/")
    }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png" alt="Error 404" />
        <Button onClick={handleBack}>Regresar Al Inicio</Button>
    </div>
  );
}