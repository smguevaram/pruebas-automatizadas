Feature: Edición de un Post en Ghost
    Scenario: Edición exitosa de un Post
        Given Que el usuario se encuentre autenticado 
        When Hace clic en la opción Posts del menú lateral
        And hace clic en el primer post en la lista
        And cambia el titulo a "Nuevo Título"
        And cambia el contenido a "Nuevo contenido"
        And hace clic en el botón de guardar
        Then se debe mostrar el mensaje de éxito de guardado