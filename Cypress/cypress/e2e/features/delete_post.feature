Feature: Eliminación de un Post en Ghost
    Scenario: Eliminación exitosa de un Post
        Given Que el usuario se encuentre autenticado en la plataforma, ingresa la sección de post y la lista no está vacía
        And ingresa al detalle de un post 
        And elimina el post
        And regresa al listado de posts de Ghost
        Then el post ya no se encuentra en el listado