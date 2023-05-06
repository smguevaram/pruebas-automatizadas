Feature: Eliminar invitación a un usuario
    Scenario: Eliminación de invitación a usuario
        Given Que el usuario se encuentra autenticado, está en la página de listado de usuarios y con al menos una invitación pendiente
        When hace clic en el enlace Revoke de una de las invitaciones
        Then ya no visualiza la invitación en el listado