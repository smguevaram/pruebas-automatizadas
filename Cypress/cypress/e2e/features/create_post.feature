Feature: Publicación de un Post en Ghost
    Scenario: Publicación exitosa de un Post
        Given Que el usuario se encuentre autenticado
        When Hace clic en el botón de creación asociado a la opción post del menú
        And crea un post con titulo "title" y con el contenido "content"
        And regresa al lsitado de posts
        Then el post con titulo "title" se encuentra visible en el listado