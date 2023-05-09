Feature: Eliminación de una página en Ghost
    Scenario: Eliminación exitosa de una página
        Given Que el usuario se encuentre autenticado en la plataforma, ingresa la sección de páginas y la lista no está vacía
        And ingresa al detalle de una página 
        And elimina la página
        And regresa al listado de páginas de Ghost
        Then la página ya no se encuentra en el listado