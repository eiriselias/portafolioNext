const usuariosShema = {
    name: "users",
    title: "usuarios",
    type: "document",
    fields:[
        {
            name: "name",
            title: "Nombre de usuario",
            type: "string"
        },
        {   
            name: "email",
            title: "Correo electronico",
            type: "string",
        },
        {
            name: "password",
            title: "Contraseña",
            type: "string"
        }
    ]
}

export default usuariosShema;