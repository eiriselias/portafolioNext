# Portafolio Personal
¡Bienvenido a mi portafolio personal! Este proyecto fue creado para mostrar mis habilidades, proyectos y experiencia como desarrollador. Está diseñado para ser un portafolio moderno, dinámico y fácil de actualizar.

## 🚀 Características Principales
**Diseño Responsivo:** Se adapta perfectamente a cualquier dispositivo, ya sea de escritorio, tablet o móvil.

**Gestión de Contenido con Sanity:** Utilizo Sanity CMS como headless CMS para gestionar y actualizar fácilmente los proyectos, habilidades y la información de contacto sin tocar el código.

**Animaciones Fluidas:** Uso Framer Motion para animaciones elegantes y fluidas que mejoran la experiencia de usuario.

**Tecnologías Modernas:** Construido con las tecnologías más recientes para un rendimiento óptimo.

## 🛠️ Tecnologías Utilizadas
**Next.js:** El framework de React para aplicaciones web con rendimiento optimizado.

**React:** La biblioteca de JavaScript para construir interfaces de usuario.

**Sanity:** El CMS que me permite gestionar todo el contenido de manera sencilla.

**Tailwind CSS:** Un framework de CSS utilitario para un estilizado rápido y flexible.

**Framer Motion:** Una librería para animaciones en React.

## 💻 Instalación y Uso
Sigue estos pasos para tener una copia local del proyecto funcionando.

Requisitos Previos
Asegúrate de tener instalado Node.js y npm o yarn en tu máquina.

Configuración del Proyecto
Clona el repositorio:

```bash

git clone https://github.com/eiriselias/portafolioNext.git
```
Navega al directorio del proyecto e instala las dependencias:

```bash
cd portafolioNext
npm install  # o yarn install
```
Configura tus variables de entorno. Crea un archivo .env.local en la raíz del proyecto y añade tus credenciales de Sanity:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="tu_id_de_proyecto_de_sanity"
NEXT_PUBLIC_SANITY_DATASET="production"
```
Puedes encontrar el PROJECT_ID en el archivo sanity.json o en el proyecto en la pagina web de Sanity. El DATASET por defecto es production.

Ejecutar el Servidor de Desarrollo
Para iniciar la aplicación en Next.js:

```bash
npm run dev  # o yarn dev
```
El servidor se ejecutará en [http://localhost:3000](http://localhost:3000).

Para iniciar el Sanity Studio y gestionar el contenido:
El Sanity Studio se ejecutará en [http://localhost:3000/studio](http://localhost:3000/studio).

✍️ Autor
Eiris Elias - Desarrollador Frontend

GitHub: eiriselias
