const proyectsShemas = {

    name: "proyects",
    title: "Proyectos",
    type: "document",
    fields:[
        {
            name: "name",
            title: "Nombre del proyecto",
            type: "string"
        },
        {
            name: "miniDescription",
            title: "Descripcion corta",
            type: "text",
        },
        {
            name: "description",
            title: "Descripcion",
            type: "text",
        },
        {
            name: "imgProyect",
            title: "Url de la imagen del proyecto",
            type: "url"
        },
        {
            name: "imgDev",
            title: "Url imagen software de desarrollo",
            type: "url"
        },
        {
            name: "url",
            title: "Url visualizacion del proyecto",
            type: "url"
        },
        {
            name:"skills",
            title: "Hablidades",
            type: "array",
            of:[{type: "reference", to:[{type: "skills"}]}]
        }


    ]

}

export default proyectsShemas;