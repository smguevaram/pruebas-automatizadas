Feature: Creación de un Pagina tipo draft en Ghost
    Scenario: Creacion exitosa de una página tipo draft
        Given Que el usuario se encuentre autenticado en la plataforma de ghost
        When va a la página de creación de página
        And ingresa titulo "titleDraft" y contenido "contentDraft" en formulario, espera 2 segundos
        And regresa al lsitado de páginas de Ghost
        Then la página con titulo "titleDraft" se encuentra visible en el listado con el status draft
