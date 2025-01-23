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
          proyectos && proyectos.map((proyect)=>{
            return(
              <>
              <button onClick={()=>{setOpenModal(true); setModalProyect(proyect)}} key={proyect.id}> 
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
                              className='h-8 w-8 gap-2 mr-2'
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
                openModal && <div className="bg-slate-500 absolute left-0 top-0 w-full h-full">
                  <div className='flex justify-center items-center h-full'>
                    <div className='bg-white w-1/2 opacity-100 flex flex-col items-center relative'>
                      {
                        modalProyect &&
                        <>
                          <div className='p-4 text-3xl font-bold'>
                            <h1 className='uppercase'>{modalProyect.name}</h1>
                            <div className='absolute top-2 right-2'>
                              <Button onClick={()=>setOpenModal(false)}>X</Button>
                            </div>
                          </div>
                            <img src={modalProyect.imgProyect} alt={modalProyect.name} />
                            <Link className='bg-primaryColor text-white text-2xl font-bold px-4 py-2 rounded-full my-4 transition duration-300 ease-in-out cursor-pointer hover:scale-105' 
                              href={modalProyect.url} target="_blank" >Visitar</Link>
                          <div className='flex flex-col items-center justify-center w-11/12'>
                            <p>{modalProyect.description}</p>
                          </div>
                          <div className='grid grid-cols-4 gap-6 my-8'>
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
                          <div className='mb-4'>
                            <Button onClick={()=>setOpenModal(false)}>Cerrar</Button>
                          </div>
                        </>
                      }
                    </div>
                  </div>
                </div>
              }
             </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Proyects
