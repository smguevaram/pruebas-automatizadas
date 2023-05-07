Feature: Creacion de un botón en la navegación principal
    Scenario: Creacion exitosa de un botón en la navegación principal
        Given Que el usuario se encuentra autenticado y está en la página de ajustes de navegación
        When ingresa el label "newButtonLabel" e ingresa la url "newButtonUrl"
        And hace clic en el botón Save y va al blog
        Then debería existir un nuevo botón con el label "newButtonLabel"

