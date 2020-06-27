'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * Oculta campos definidos no retorno.
   */
  static get hidden () {
    return ['password']
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  /**
   * retorna relacionamento com token
   *
   * @memberof User
   */
  tokens = () => this.hasMany('App/Models/Token')
  
  /**
   * retorna relacionamento com imagem
   *
   * @memberof User
   */
  image = () => this.belongsTo('App/Models/Image')
  
  /**
   * retorna relacionamento com cupom
   *
   * @memberof User
   */
  coupons = () => this.belongsToMany('App/Models/Coupon')
}

module.exports = User
