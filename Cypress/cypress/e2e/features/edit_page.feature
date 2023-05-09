Feature: Edición de una página en Ghost
    Scenario: Edición exitosa de una página
        Given Que el usuario se encuentre autenticado en la plataforma de Ghost
        When Ingresa a la sección de páginas
        And ingresa al detalle de una página, edita el titulo por "newTitle" y hace clic en el botón de guardar cambios
        And regresa al listado de páginas de ghost
        Then la página con titulo "newTitle" se encuentra visible