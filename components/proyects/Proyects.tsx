'use client'
import React, { useState } from 'react'
import proyects from "@/helpers/proyects.helpers"
import Button from '../ui/Button'
import Link from 'next/link';

interface IProyect {
    id: number;
    name: string;
    miniDescription: string;
    description: string;
    imgProyect: string;
    imgDev: string;
    url: string;
    skills:{
        id: number;
        image: string;
        name: string;
        clase?: string;
    }[]
}

const Proyects = () => {

  const [openModal, setOpenModal] = useState(false);
  const [modalProyect, setModalProyect] = useState<IProyect>();
  const proyectos: IProyect[] = proyects

  return (
    <div className='bg-primaryColor flex flex-col items-center p-1 sm:p-4 md:p-16 relative'>
      <h1 className='text-2xl font-bold text-white mb-8'>Proyectos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {
          proyectos && proyectos.slice().reverse().map((proyect)=>{
            return(
              <div key={proyect.id}>
              <button onClick={()=>{setOpenModal(true); setModalProyect(proyect)}} > 
                <div className='bg-white rounded-lg overflow-hidden animate-show' >
                  <div className='w-full h-44 overflow-hidden'>
                      <img src={proyect.imgProyect} alt={`img-${proyect.name}`} />
                  </div>
                  <div className='h-60 relative flex flex-col'>
                      <h3 className='self-center font-bold text-2xl uppercase mt-6'>{proyect.name}</h3>
                      <div className='h-full p-4 flex flex-col overflow-y-auto'>
                          <p className='text-justify'>{proyect.miniDescription}</p>
                          <div className='w-16 h-16 absolute flex justify-center -top-[2.5rem] left-1/2 transform -translate-x-1/2 bg-white rounded-full overflow-hidden'>
                              <img src={proyect.imgDev} alt="logoDev" />
                          </div>
                      </div>
                  </div>
                  <hr />
                  <div className='bg-blue-100 flex justify-end py-2 relative'>
                    {
                      proyect.skills && proyect.skills.map((skill)=>{
                        return(
                          <div className='group' key={skill.id}>
                            <img 
                              src={skill.image} 
                              alt={`skill${skill.id}`}                               
                              className={`h-8 w-8 gap-2 mr-2 ${skill.clase}`}
                            />
                            <div className='absolute bottom-full text-[10px] mb-2 hidden group-hover:block bg-primaryColor text-white p-2 rounded'>
                              {skill.name}
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
             </button>             
              {
                openModal && <div className="bg-slate-500/40 absolute left-0 top-0 w-full h-full">
                  <div className='flex justify-center items-center h-full'>
                    <div className='bg-white w-1/2 opacity-100 flex flex-col items-center relative'>
                      {
                        modalProyect &&
                        <>
                          <div className='p-4 text-3xl text-white bg-primaryColor w-full text-center'>
                            <h1 className='uppercase'>{modalProyect.name}</h1>
                            <div 
                            className="absolute hover:bg-red-400 right-4 top-4 w-10 h-8 py-4 rounded-full flex items-center justify-center
                            transition duration-300 ease-in-out cursor-pointer hover:scale-105  ">
                            <button 
                              onClick={() => setOpenModal(false)}
                              className="text-white text-lg font-bold"
                            >
                              X
                            </button>
                            </div>
                          </div>
                            <img src={modalProyect.imgProyect} alt={modalProyect.name} />
                            <Link className='text-primaryColor my-4 text-2xl transition duration-300 ease-in-out cursor-pointer hover:scale-105' 
                              href={modalProyect.url} target="_blank" >Visitar</Link>
                          <div className='flex flex-col items-center justify-center w-11/12'>
                            <p>{modalProyect.description}</p>
                            <hr className='w-full mt-4'/>
                          </div>
                          <div className='grid grid-cols-6 gap-6 my-8'>
                          {
                            modalProyect.skills && modalProyect.skills.map((skill)=>{
                              return(
                                <div className='group flex flex-col justify-center items-center' key={skill.id}>
                                  <img 
                                    src={skill.image} 
                                    alt={`skill${skill.id}`}                               
                                    className='h-8 w-8 mr-2'
                                  />
                                  <div className=''>
                                    {skill.name}
                                  </div>
                                </div>
                              )
                            })
                          }
                          </div>
                          <div className='bg-primaryColor w-full flex justify-center items-center py-4'>
                            <Button 
                            className='bg-white'
                            onClick={()=>setOpenModal(false)}>Cerrar</Button>
                          </div>
                        </>
                      }
                    </div>
                  </div>
                </div>
              }
             </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Proyects
