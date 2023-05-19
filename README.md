# proyecto-del-segundo-parcial

[Enlace de la imagen de Docker](https://hub.docker.com/repository/docker/armandomoravalles2/proyecto_segundo_parcial2.0)

### miembros del equipo
- Armando Mora Valles 334270

### como funciona
Se creo el sitio utilizando un servidor de NodeJs creado con el framework de NodeJs express para facilitar la creacion del servidor
este framework a traves de un midleware nos da la posibilidad de renderizar archivos estaticos: 

```
app.use(express.static('pages'));
```

como se muestra en la linea las paginas html que se encuentran en esa carpeta

La estructura del proyecto es muy simple tenemos el archivo index.js que es el punto de partida del proyecto, una carpeta llamada pages con todas las paginas con el html y ademas una carpeta de styles para colocar dentro las hojas de estilo css para esas paginas

En el archivo index.js solo se maneja un endpoint llamado /enviar que se ejecuta al mandar el formulario alojado en contactanos
