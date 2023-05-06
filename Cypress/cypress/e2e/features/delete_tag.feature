Feature: Eliminar una etiqueta en Ghost
    Scenario: Eliminación exitosa de una etiqueta
        Given Que el usuario se encuentra autenticado y está en la página de listado de etiquetas
        When Crea una etiqueta con "toDeleteName", "toDeleteSlug" y "toDeleteDescription"
        And hace click en la opción tags del menú lateral principal
        And Hace clic en la etiqueta creada
        And Hace clic en el botón Delete
        And hace click en la opción tags del menú lateral principal
        Then no debería ver la etiqueta con el nombre "toDeleteName"