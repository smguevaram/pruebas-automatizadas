Feature: Editar una etiqueta en Ghost
    Scenario: Edición exitosa de una etiqueta
        Given Que el usuario se encuentra autenticado y está en la página de listado de etiquetas no vacía
        When Hace clic en una etiqueta
        And Edita el nombre con el dato "editedName" y hace clic en el botón Save
        And hace click en la opción tags del menú lateral principal
        Then debería ver la etiqueta con el nuevo nombre "editedName" en el listado de etiquetas