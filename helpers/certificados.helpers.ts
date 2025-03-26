export const certificadosData = [
    {
        "id": 1,
        "name":"HTML5",
        "entity":"Ademass",
        "url":"/documents/diplomaHtml5.pdf"
    },
    {
        "id": 2,
        "name":"HTM y CSS Basico",
        "entity":"Open BootCamp",
        "url":"/documents/diplomaCssOpenBootcamp.pdf"
    },
    {
        "id": 3,
        "name":"Python",
        "entity":"Cursa",
        "url":"/documents/certificadoPython.pdf"
    },
    {
        "id": 4,
        "name":"MySQL esencial",
        "entity":"Linkedin",
        "url":"/documents/certificadoMySQL.pdf"
    },
    {
        "id": 5,
        "name":"JavaScript avanzado",
        "entity":"Linkedin",
        "url":"/documents/certificadoJavaScriptAvanzado.pdf"
    },
    {
        "id": 6,
        "name":"Git y GitHub",
        "entity":"Ademass",
        "url":"/documents/certificadoGitGithub.pdf"
    },
    {
        "id": 7,
        "name":"Angular Js",
        "entity":"Cursa",
        "url":"/documents/certificadoaAngularJs.pdf"
    },
    {
        "id": 8,
        "name":"Desarrollo Web Full Stack",
        "entity":"Soy Henry",
        "url":"/documents/SoyHenry.pdf"
    },
    {
        "id": 9,
        "name":"Diseño de proyectos usando FIGMA - UI",
        "entity":"Cursa",
        "url":"/documents/certificadoFigma.pdf"
    },
]


export interface ICertificado {
    id: number,
    name: string,
    entity: string,
    url: string
}