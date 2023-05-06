Feature: Editar un usuario en Ghost
    Scenario: Edición exitosa de un usuario
        Given Que el usuario se encuentra autenticado y está en la página de listado de usuarios
        When Hace clic en un usuario
        And Edita el nombre con el dato "editedName" y hace clic en el botón Save de la página
        And hace click en la opción Staff del menú lateral principal
        Then debería ver el usuario con el nuevo nombre "editedName" en el listado de usuarios