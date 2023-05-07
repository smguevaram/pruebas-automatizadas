# pruebas-automatizadas
## Semana 4
### Link Issues encontrados
[Issues-RIPuppet](https://github.com/smguevaram/pruebas-automatizadas/issues/1)

### Resultados, ventajas y desventajas

[Resultados](https://github.com/smguevaram/pruebas-automatizadas/wiki/Pruebas-automatizadas-RIPuppet-y-monkey-cypress)

## Semana 5
### Funcionalidades y descripción de escenarios de pruebas

1. Administración de tag
    - Crear nuevo tag: para crear un nuevo tag es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección tags, luego se da click al botón new tag, se crea el tag, se da click en el botón save y se verifica que el tag se ha creado exitosamente.
    - Editar tag: para editar un tag es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección tags, luego se da click en un tag ya creado, se edita, se da click en el botón save y se verifica que el tag se ha editado exitosamente.
    - Eliminar tag: para eliminar un tag es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección tags, luego se da click en un tag ya creado, se da click en el botón delete tag, luego click en el botón delete y se verifica que el tag se ha eliminado exitosamente.


2. Administración de post
    - Crear un post como borrador:para crear un post como borrador es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección posts, luego se da click al botón new post, se crea el post, se da click en cualquier lugar de la página para que se cree el draft, luego se da click en el botón posts y se verifica que el post se ha creado exitosamente como borrador.
    - Crear un nuevo post: para crear un nuevo post es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección posts, luego se da click al botón new post, se crea el post, se da click en cualquier lugar de la página para que se cree el draft, se da click en el botón publish, luego se da click en el botón publish para confirmar la publicación y se verifica que el post se ha creado exitosamente.
    - Editar post: para editar un post es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección posts, luego se da click en un post ya creado, se edita, se da click en el botón update, luego se da click en el botón update para confirmar la edición y se verifica que el post se ha editado exitosamente.
    - Eliminar post: para eliminar un post es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección posts, luego se da click en un post ya creado, se da click en la sección Post settings, luego click en el botón delete y se verifica que el post se ha eliminado exitosamente.
    


3. Administración de página
    - Crear una página como borrador:para crear una página como borrador es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección pages, luego se da click al botón new page, se crea la página, se da click en cualquier lugar de la página para que se cree el draft, luego se da click en el botón pages y se verifica que la página se ha creado exitosamente como borrador.
    - Crear una nueva página: para crear una nueva página es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección pages, luego se da click al botón new page, se crea la página, se da click en cualquier lugar de la página para que se cree el draft, se da click en el botón publish, luego se da click en el botón publish para confirmar la publicación y se verifica que la página se ha creado exitosamente.
    - Editar página: para editar una página es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección pages, luego se da click en una página ya creada, se edita, se da click en el botón update, luego se da click en el botón update para confirmar la edición y se verifica que la página se ha editado exitosamente.
    - Eliminar post: para eliminar una página es necesario autenticarse, una vez autenticado, en el menú izquierdo se ingresa a la sección pages, luego se da click en una página ya creada, se da click en la sección Page settings, luego click en el botón delete y se verifica que el post se ha eliminado exitosamente.


4. Administración de menú
    - Crear nuevo botón de menú: para crear un nuevo botón de menú es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección design, en la sección navigation se crea un nuevo botón de menú, se da click en el botón save, luego click de nuevo en la sección design y se verifica que el botón de menú se creo exitosamente
    - Editar un botón de menú: para editar botón de menú es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección design, luego se da click en un botón de menú ya creado, se edita, se da click en el botón save, , luego click de nuevo en la sección design y se verifica que el botón de menú se editó exitosamente
    - Eliminar un botón de menú : para eliminar un botón de menú es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección design, luego se da click en el boton delete que haga parte del boton de menú ya creado, se da click en el botón save, , luego click de nuevo en la sección design y se verifica que el botón de menú se eliminó exitosamente.

5. Administración de usuarios
    - Invitar a un nuevo usuario: para invitar a un nuevo usuario es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección staff, se da click en el boton invite people, se escribe el correo de la persona que quiere invitar, se da click en el botón send invitation now, luego se refresca la página y se verifica que la invitación ha sido enviada.
    - Eliminar invitación de usuario: para eliminar una invitación a un usuario es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección staff, se da click en el botón revoke en la invitación del usuario que se quiere eliminar, luego se da click en el botón staff  y se verifica que la invitación ha sido eliminada.
    - Suspender usuario: para suspender a un usuario es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección staff, se da click en el usuario que se quiere suspender, se da click en el botón settings,  click en el botón suspend User,  click en el botón suspend, luego click en el botón staff y se verifica que el usuario ha sido suspendido.
    - Quitar suspensión de usuario: para quitarle la suspensión a un usuario es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección staff, se da click en el usuario al que se le quiere quitar la suspensión, se da click en el botón settings,  click en el botón Un-suspend User,  click en el botón Un-suspend, luego click en el botón staff y se verifica que al usuario se le ha quitado la suspensión.
    - Modificar titulo de la página: para modificar el titulo de la página es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección general, en la sección donde se encuentra el titulo se da click en expand, se modifica el titulo, se da click en save sttings y se verifica que el titulo de la página se modificó exitosamente.
    - Modificar nombre de usuario: para modificar el titulo de la página es necesario autenticarse, una vez autenticado en el menú izquierdo se ingresa a la sección staff, se da click en el usuario al que se desea modificar el nombre, se edita el nombre, se da click en save y se verifica que el nombre del usuario se modificó exitosamente.



### Pruebas con Kraken
#### Información importante para la ejecución:
 -  Para la ejecución de las pruebas con kraken tenemos las funcionalidades distribuidas en diversos archivos .feature, los cuales va a encontrar en la carpeta `myFeatures()`.
 -  Es importante tener claro que para efectos de este tutorial se va a ejecutar por separado cada funcionalidad con sus respectivos escenarios de pruebas. 

#### Para ejecutar los escenarios siga las siguientes instrucciones (se asume la previa instalación de kraken):
 1. Instalar la versión `14.18.0` de node.
 2. En caso de no tener Ghost instalado, instalelo en su versión `3.41.1`.
 3. Ingrese en la terminal el comando npm install.
 4. En caso de no tener cuenta en Ghost creela.
 5. En el archivo properties.json incluya sus credenciales para ingresar a la aplicación (`USERNAME` Y `PASSWORD`).
 6. Ingrese a la carpeta `myFeatures` y arrastre el archivo `menu.feature` a la carpeta features.
 7. Para que la ejecución sea exitosa debe verificar que en la carpeta features solo esta el archivo `.feature` que arrastro; en este caso menu.feature, ya que si hay mas de un archivo .feature la prueba va a fallar.
 8. Ingrese a la terminal y corra el siguiente comando: `npx kraken-node run`. De esta manera se empezaran a ejecutar las pruebas para la funcionalidad seleccionada y cuando termine podrá ver los resultados en la carpeta reports.
 9. Repita los pasos 6, 7 y 8 para el resto de las funcionalidades encontradas en el archivo myFeatures.

### Pruebas con Cypress

#### Requisitos

1. Tener instalado node en su versión `v18.12.1`
2. Tener cypress instalado en su versión `12.9.0`
3. Tener la versión de ghost `3.41.1`

#### Para ejecutar los escenarios es necesario seguir las siguientes instrucciones

1. Por medio de la terminal ingresar a la carpeta `Cypress` con el comando `cd Cypress`
2. Instalar dependencias ejecutando `npm i`
3. En el archivo `cypress.config.js` cambiar la url y el puerto en el que se está ejecutando Ghost en su máquina local por medio del  atributo `baseUrl`.
4. Agregar correo y contraseña del usuario administrador de Ghost en el archivo `Cypress/cypress/fixtures/Users.json` en las líneas 2 y 3 por medio de los atributos `username` y `password` respectivamente.
5. Ejecutar cypress con el comando `cypress open`
6. Agregar la carpeta `Cypress` como nuevo proyecto
7. Seleccionar la opción E2E Testing

![image](https://user-images.githubusercontent.com/123912813/236685717-a989a1ac-6e9f-42fe-8114-5b09bfd75513.png)

8. Seleccionar el navegador `Chrome v112` y hacer clic en el botón para ejecutar test e2e en Chrome
9. Hacer clic en los archivos `*.feature` para ejecutar cada escenario

![image](https://user-images.githubusercontent.com/123912813/236685741-083189a2-8b2a-4bcc-a8f1-e86004fd3080.png)


### Click [aquí](https://github.com/smguevaram/pruebas-automatizadas/wiki) para ver pros y contras de Kraken y Cypress


