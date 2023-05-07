Feature: Administracion de usuarios

@user13 @web
Scenario:Invitar a un nuevo usuario
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'staff' 
  And I wait for 1 seconds
  And I click in button 'invite people'
  And I wait for 1 seconds
  And I click in inputLabel 'empty' and type 'test@correo.com'
  And I wait for 1 seconds
  And I click in button 'send invitation now'
  And I wait for 6 seconds
  And I click in buttonName 'tags'
  And I wait for 1 seconds
  And I click in buttonName 'staff' 
  And I check that exist 'test@correo.com' in email's invitations