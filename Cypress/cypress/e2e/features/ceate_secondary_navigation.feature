Feature: Creacion de navegación secundaria
    Scenario: Creacion exitosa de navegación secundaria
        Given Que el usuario se encuentra autenticado en Ghost y está en la página de ajustes de navegación
        When ingresa el label "newButtonLabelSN" e ingresa la url "newButtonUrlSN" en formulario
        And hace clic en el botón Save y va al blog de ghost
        Then debería existir un nuevo botón con el label "newButtonLabelSN" en la navegación secundaria

