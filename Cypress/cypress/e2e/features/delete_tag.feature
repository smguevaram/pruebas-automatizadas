Feature: Eliminar una etiqueta en Ghost
    Scenario: Eliminación exitosa de una etiqueta
        Given Que el usuario se encuentra autenticado y está en la página de listado de etiquetas
        When Crea una etiqueta con "toDeleteName", "toDeleteSlug" y "toDeleteDescription"
        And hace click en la opción tags del menú lateral principal de Ghost
        And Hace clic en la etiqueta creada con el nombre "toDeleteName"
        And Hace clic en el botón Delete
        Then no debería ver la etiqueta con el nombre "toDeleteName"