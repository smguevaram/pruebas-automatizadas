Feature: Editar configuraciones generales del sitio
    Scenario: Editar nombre del sitio de manera exitosa
        Given Que el usuario se encuentra autenticado y en la página de configuraciones generales
        When cambia el titulo del sitio a "newTitle"
        And hace click en el botón Save settings
        Then el nombre del sitio cambia a "newTitle"