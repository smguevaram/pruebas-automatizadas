Feature: Suspender un usuario en Ghost
    Scenario: Suspensión exitosa de un usuario
        Given Que el usuario se encuentra autenticado, está en la página de listado de usuarios no vacía y listado de usuarios suspendidos vacía
        When hace clic en un usuario activo
        And Suspende el usuario
        Then debería visualizar el estado suspendido al lado del nombre del usuario