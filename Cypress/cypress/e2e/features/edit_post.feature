Feature: Edición de un Post en Ghost
    Scenario: Edición exitosa de un Post
        Given Que el usuario se encuentre autenticado en la plataforma
        When Ingresa a la sección de posts
        And ingresa al detalle de un post, edita el titulo por "newTitle" y hace clic e nel botón de guardar cambios
        And regresa al listado de posts
        Then el post con titulo "newTitle" se encuentra visible