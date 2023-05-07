# pruebas-automatizadas
## Semana 4
### Link Issues encontrados
[Issues-RIPuppet](https://github.com/smguevaram/pruebas-automatizadas/issues/1)

### Resultados, ventajas y desventajas

[Resultados](https://github.com/smguevaram/pruebas-automatizadas/wiki/Pruebas-automatizadas-RIPuppet-y-monkey-cypress)

## Semana 5
### Funcionalidades y descripción de escenarios de pruebas
 1. Administración de tag
  - Crear nuevo tag: para crear un nuevo tag es necesario autenticarse, una vez autenticado en el menu izquierdo se ingresa a la sección tags, luego se da click al boton new tag, se crea el tag, se da click en el botón save y se verifica que el tag se ha creado exitosamente.
  - Editar tag: para editar un tag es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección tags, luego se da click en un tag ya creado, se edita, se da click en el boton save y se verifica que el tag se ha editado exitosamente.
  - Eliminar tag: para eliminar un tag es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección tags, luego se da click en un tag ya creado, se da click en el boton delete tag, luego click en el boton delete y se verifica que el tag se ha eliminado exitosamente.

2. Administración de post
- Crear un nuevo post: para crear un nuevo post es necesario autenticarse, una vez autenticado en el menu izquierdo se ingresa a la sección posts, luego se da click al boton new post, se crea el post, se da click en cualquier lugar de la página para que se cree el draft, se da click en el boton publish, luego se da click en el boton publish para confirmar la publicación y se verifica que el post se ha creado exitosamente.
- Editar post: para editar un post es necesario autenticarse, una vez autenticado en el menu izquierdo se ingresa a la sección posts, luego se da click en un post ya creado, se edita, se da click en el boton update, luego se da click en el boton update para confirmar la edición y se verifica que el post se ha editado exitosamente.
- Eliminar post: para eliminar un post es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección posts, luego se da click en un post ya creado, se da click en la seccion Post settings, luego click en el boton delete y se verifica que el post se ha eliminado exitosamente.


### Pruebas con Kraken
Información importante para la ejecución:
 -  Para la ejecución de las pruebas con kraken tenemos las funcionalidades distribuidas en diversos archivos .feature, los cuales va a encontrar en la carpeta myFeatures ().
 -  Es importante tener claro que para efectos de este tutorial se va a ejecutar por separado cada funcionalidad con sus respectivos escenarios de pruebas. 
 -  Las funcionalidades se encuentran en el archivo myFeatures.

Para ejecutar los escenarios siga las siguientes instrucciones (se asume la previa instalación de kraken):
 1. Instalar la versión 14.18.0 de node.
 2. En caso de no tener Ghost instalado, instalelo en su versión 3.41.1.
 3. Ingrese en la terminal el comando npm install.
 4. En caso de no tener cuenta en Ghost creela.
 5. En el archivo properties.json incluya sus credenciales para ingresar a la aplicación (USERNAME Y PASSWORD).
 6. Ingrese a la carpeta myFeatures y arrastre el archivo menu.feature a la carpeta features.
 7. Para que la ejecución sea exitosa debe verificar que en la carpeta features solo esta el archivo .feature que arrastro; en este caso menu.feature, ya que si hay mas de un archivo .feature la prueba va a fallar.
 8. Ingrese a la terminal y corra el siguiente comando: npx kraken-node run. De esta manera se empezaran a ejecutar las pruebas para la funcionalidad seleccionada y cuando termine podrá ver los resultados en la carpeta reports.
 9. Repita los pasos 6, 7 y 8 para el resto de las funcionalidades encontradas en el archivo myFeatures.

### Pruebas con Cypress
[Resultados](https://github.com/smguevaram/pruebas-automatizadas/wiki/Pruebas-automatizadas-RIPuppet-y-monkey-cypress)



