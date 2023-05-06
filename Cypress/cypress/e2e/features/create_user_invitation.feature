Feature: Enviar invitación a un usuario en Ghost
    Scenario: Actualización listado de invitaciones exitosa después de enviar invitación
        Given Que el usuario se encuentra autenticado, está en la página de listado de usuarios
        When envía invitacion al usuario con email "newUserEmail"
        And regresa al listado de usuarios
        Then debería visualizar la invitación con el email "newUserEmail" en el listado