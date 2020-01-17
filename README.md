# Guia de estilos
En esta guía de estilos se definen los principales componentes de diseño, así como implementarlos y modificarlos para poder usarla como base de cualquier proyecto.

Para poder usar esta librería lo único que debemos hacer es descargar los ficheros y añadirlos a nuestro proyecto. Hay que tener en cuenta que los ficheros sass deben compilarse para poder utilizarlos.

Vamos a ver una serie de puntos a tener en cuenta a la hora de utilizar la librería:
-   En el fichero `config/_config.scss` se configura tanto la ruta de nuestro proyecto como los puntos de ruptara para la versión responsive.
-   Todas la variables CSS usadas en el proyecto están definidas en `config/_variables.scss`, por si queremos modificar por ejemplo los colores o tiporafías.
-   Los remedios rápidos que sabemos que no son correctos los debmos añadir en el fichero `hacks/_hacks.scs` para poder tenerlos localizados para arreglarlos en un futuro.
-   Todas las librerías externas, así como los nuevos componentes que añadamos debemos incluirlas en la carpeta `libraries` e importarla en el fichero `app.scss`.
-   Todo nuestro CSS propio que queramos añadir para un proyecto concreto debe añadirse en `theme/_custom.scss`.

Si quiere conocer a fondo como poder usar la librería puede ver la documentación oficial en [MyDWeb](https://mydweb.es/stylesguide).