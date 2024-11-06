export const certificadosData = [
    {
        "id": 1,
        "name":"Desarrollo Web Full Stack",
        "entity":"Soy Henry",
        "url":"/documents/SoyHenry.pdf"
    },
    {
        "id": 2,
        "name":"Angular Js",
        "entity":"Cursa",
        "url":"/documents/certificadoaAngularJs.pdf"
    },
    {
        "id": 3,
        "name":"Git y GitHub",
        "entity":"Ademass",
        "url":"/documents/certificadoGitGithub.pdf"
    },
    {
        "id": 4,
        "name":"JavaScript avanzado",
        "entity":"Linkedin",
        "url":"/documents/certificadoJavaScriptAvanzado.pdf"
    },
    {
        "id": 5,
        "name":"MySQL esencial",
        "entity":"Linkedin",
        "url":"/documents/certificadoMySQL.pdf"
    },
    {
        "id": 6,
        "name":"Python",
        "entity":"Cursa",
        "url":"/documents/certificadoPython.pdf"
    },
    {
        "id": 7,
        "name":"HTM y CSS Basico",
        "entity":"Open BootCamp",
        "url":"/documents/diplomaCssOpenBootcamp.pdf"
    },
    {
        "id": 8,
        "name":"HTML5",
        "entity":"Ademass",
        "url":"/documents/diplomaHtml5.pdf"
    },
]


export interface ICertificado {
    id: number,
    name: string,
    entity: string,
    url: string
}