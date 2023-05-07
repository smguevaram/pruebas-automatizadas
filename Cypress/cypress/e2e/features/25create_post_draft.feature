Feature: Creacion de un Post Drafts en Ghost
    Scenario: Creacion exitosa de un Post Drafts
        Given Que el usuario se encuentre autenticado 
        When Hace clic en la opción Post del menú lateral y clic en el botón Drafts
        And despues ingresa el Post Title "Post Title" 
        And Ingresar el texto del post "Begin writing your post..."
        And despues click en post del costado izquierdo
        Then validar el post en Drafts
