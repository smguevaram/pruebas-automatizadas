Feature: Creacion de un Post en Ghost
    Scenario: Creacion exitosa de un Post
        Given Que el usuario se encuentre autenticado 
        When Hace clic en la opción Post del menú lateral y clic en el botón Drafts
        And despues ingresa el Post Title "Post Title" 
        And Ingresar el texto del post "Begin writing your post..."
        And click en publicar y publicar ahora
        And despues click en post del costado izquierdo
        Then validar la publicacion del post
