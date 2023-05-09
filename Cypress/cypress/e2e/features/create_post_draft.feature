Feature: Creación de un Post en Ghost
    Scenario: Creacion exitosa de un Post tipo draft
        Given Que el usuario se encuentre autenticado
        When Hace clic en el botón de creación asociado a la opción post del menú lateral
        And ingresa titulo "titleDraft" y contenido "contentDraft", espera 2 segundos
        And regresa al lsitado de posts de Ghost
        Then el post con titulo "titleDraft" se encuentra visible en el listado con el status draft
