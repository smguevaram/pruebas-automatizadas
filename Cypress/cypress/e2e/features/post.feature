Feature: Creacion de etiqueta en Ghost

    Scenario: Creacion exitosa de una etiqueta
        Given Que el usuario se encuentra autenticado y está página de administración de Ghost
        When Hace clic en la opción Tags del menú lateral y clic en el botón New tag
        And Ingresa nombre "name", "slug" y "description"
        And hace clic en el botón Save
        And hace click en la opción tags del menú lateral
        Then debería ver la nueva etiqueta con el slug "slug" en el listado de etiquetas