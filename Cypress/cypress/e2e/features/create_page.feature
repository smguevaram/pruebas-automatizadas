Feature: Publicación de una página en Ghost
    Scenario: Publicación exitosa de una página
        Given Que el usuario se encuentre autenticado en ghost
        When Hace clic en la opción pages del menú y va a la página de creación
        And crea una página con titulo "title" y con el contenido "content"
        And regresa al listado de páginas
        Then la página con titulo "title" se encuentra visible en el listado