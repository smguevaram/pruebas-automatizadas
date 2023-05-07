Feature: Eliminación de un botón en la navegación principal
    Scenario: Eliminación exitosa de un botón en la navegación principal
        Given Que el usuario se encuentra autenticado, está en la página de ajustes de navegación y hay botones creados
        When elimina un botón de la navegación principal y va al blog
        Then el botón eliminado ya no existe en la nevagación principal

