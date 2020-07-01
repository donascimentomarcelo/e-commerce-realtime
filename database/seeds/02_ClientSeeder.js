'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Factory = use('Factory');
const Role = use('Role');
const User = use('App/Models/User');

class ClientSeeder {
  async run () {
    const clientRole  = await Role.findBy('slug', 'client');
    const clients = await Factory.model('App/Models/User').createMany(30);
    await Promise.all( 
      clients.map(async client => await client.roles().attach([clientRole.id]))
    );

    const user = await User.create({
      name: 'Kyle',
      surname: 'Crane',
      email: 'crane@example.com',
      password: 'secret'
    });

    const adminRole = await Role.findBy('slug', 'admin');
    await user.roles().attach([adminRole.id]);
  }
}

module.exports = ClientSeeder
