Feature: Login de usuario

    Scenario: Login Exitoso de Usuario
        Given Que el usuario accede al sitio web
        When Ingresa con el username "username" y la contraseña "password" y hace clic en el botón login
        Then El usuario ingresa a la sección de administración