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
  Then I check that exist 'test@correo.com' in email's invitations
  And I send a signal to user 14 containing "done"

@user14 @web
Scenario:Eliminar invitacion de usuario
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  And I wait for a signal containing "done" for 25 seconds
  When I click in buttonName 'staff' 
  And I wait for 1 seconds
  And I delete user invitation with email 'test@correo.com'
  And I click in buttonName 'staff'
  Then I check that not exist 'test@correo.com' in email's invitations

@user15 @web
Scenario:Suspender usuario
 Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'staff'
  And I wait for 1 seconds
  And I click on user 'ghost'
  And I wait for 2 seconds
  And I click on user settings
  And I click in button 'suspend user'
  And I wait for 1 seconds
  And I click in button 'suspend'
  And I wait for 2 seconds
  And I click in buttonName 'tags'
  And I click in buttonName 'staff'
  And I wait for 2 seconds
  Then I check state 'suspended' for user 'ghost'
  And I send a signal to user 16 containing "done"

@user16 @web
Scenario:Quitar suspension de usuario
 Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  And I wait for a signal containing "done" for 25 seconds
  When I click in buttonName 'staff'
  And I wait for 1 seconds
  And I click on user 'ghost'
  And I wait for 2 seconds
  And I click on user settings
  And I click in button 'un-suspend user'
  And I wait for 1 seconds
  And I click in button 'un-suspend'
  And I wait for 2 seconds
  And I click in buttonName 'tags'
  And I click in buttonName 'staff'
  And I wait for 2 seconds
  Then I check state 'author' for user 'ghost'

@user20 @web
Scenario:Modificar nombre de usuario
  Given I authenticate email "<USERNAME>" and password "<PASSWORD>" 
  And I wait for 1 seconds
  When I click in buttonName 'staff' 
  And I wait for 2 seconds
  And I look for a user with status 'owner'
  And I wait for 10 seconds
  And I type in input 'test' and type 'full name'
  And I click in button 'save'
  And I wait for 1 seconds
  And I click in buttonName 'tags'
  And I click in buttonName 'staff'
  And I wait for 1 seconds
  Then I check state 'owner' for user 'test'