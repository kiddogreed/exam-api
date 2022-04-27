

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('test','TestsController.test')

Route.resource('students','TeachersController')
