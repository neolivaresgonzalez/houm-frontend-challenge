# houm-frontend-challenge
Aplicación web en React con Next.js para mostrar conocimiento en las herramientas. Se consume la API pública de Pokémon

## Decisiones técincas

- Se trabajó con la Pokemon API porque busqué una lista de API públicas y me pareció interesante por gusto y además se encuentra paginada, lo cual facilita la construcción del scroll infinito.
- Focalicé los esfuerzos en el scroll infinito como lo hace la página de Houm.
- Focalicé los esfuerzos en el uso de varios recursos de la API pública consumidos por distintos comoponentes independientes y desacoplados en la página "/pokedex".
- Focalicé en dejar estructurado el proyecto de tal manera que sea comprensible la ubicación de conector con la API, componentes, paginas independientes, activos como imágenes, entre otros.
- Me atreví a utilizar un framework que nucnca había utilizado con React como Next.js
- Utilicé Material-UI como framework de estilo
- Esta es una lista de las herramientas que se utilizaron:
> - Docker
> - Next.js
> - Material-UI (MUI)
> - React
> - Axios (cree cliente para comunicación con API)
> - Vultr para despliegue de aplicación con contenedores de Docker. (Primera vez que la uso y me tomó 30 minutos entre contratar servicio y despliegue)
- No se cumplieron todos los requisitos para el desafío. Pendientes: búsqueda, filtro, ordenamiento.



## Despliegue

### Comandos docker para despliegue
Estos son los comandos que utilizé para construir la imágen del contenedor y luego correrlo en el servidor de producción.
```powershell
$> docker build -t neolivaresgonzalez/pokemon/showroom pokemon-showroom/.

$> docker run --ip="140.82.25.232" -p 49160:3000 -d neolivaresgonzalez/pokemon/showroom --name="pokemon_showroom"
```
## Aplicación 
La aplicación se desplegó a través de contenedor docker en vultr.com
Aplicación desplegada en dirección http://140.82.25.232:49160





