import { createClient } from 'next-sanity'
import {dataset, projectId, apiVersion} from './env'


export const client = createClient({
    projectId,
    dataset,
    apiVersion
})

export async function getUsers() {
    const query = `*[_type == "users"]{
    _id,
    name,
    email,
  }`

  const users = await client.fetch(query)
  return users
}

export async function getSkills() {
    const query = `*[_type == "skills"]{
    _id,
    name,
    image,
    clase
  }`

  const skills = await client.fetch(query)
  return skills
}

export async function getCertificados() {
    const query = `*[_type == "certificados"]{
    _id,
    name,
    entity,
    url
  }`

  const certificados = await client.fetch(query)
  return certificados
}

export async function getProyects() {
    const query = `*[_type == "proyects"]{
    _id,
    name,
    miniDescription,
    description,
    imgProyect,
    imgDev,
    url,
    skills[]->{
      _id,
    name,
    image,
    clase
    }
  }`

  const proyects = await client.fetch(query)
  return proyects
}