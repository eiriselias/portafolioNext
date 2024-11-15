import React from 'react'
import skillData from "@/helpers/skills.helpers"

interface skill {
    id: number,
    name:string,
    image:string,
    clase:string
}

const Skills = () => {

    const datas:skill[] = skillData

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>Habilidades</h1>
      <hr />
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mt-4 w-full items-center justify-items-center gap-8'>
        {
            datas && datas.map((data)=>{
                return(
                    <div className='relative group hover:scale-105' key={data.id}>
                        <img src={data.image} alt={`logo${data.name}`} width="100" className={data.clase}/>
                        <div className='absolute bottom-full mb-2 hidden group-hover:block bg-primaryColor text-white font-bold p-2 rounded'>
                            {data.name}
                        </div>
                    </div>        
                )
            }) 
        }
      </div>
    </div>
  )
}

export default Skills
