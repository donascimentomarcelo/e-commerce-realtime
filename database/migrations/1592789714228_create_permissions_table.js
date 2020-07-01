'use strict'

const Schema = use('Schema')

class PermissionsTableSchema extends Schema {
  up () {
    this.create('permissions', table => {
      table.increments()
      table.string('slug').notNullable()
      table.string('name').notNullable()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('permissions')
  }
}

module.exports = PermissionsTableSchema
