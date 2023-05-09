Feature: Editar un botón de la navegación principal
    Scenario: Edición exitosa de un botón de la navegación principal
        Given Que el usuario se encuentra autenticado y está en la página de ajustes de navegación de Ghost
        When edita el label del primer botón por el texto "editedButtonLabel" visible en la lista
        And hace clic en el botón Save y va al blog de Ghost
        Then debería existir un botón con el label "editedButtonLabel"