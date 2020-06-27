'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {

    /**
     * formata valor para o padrao do mysql
     *
     * @readonly
     * @static
     * @memberof PasswordReset
     */
    static get dates () {
        return ['created_at', 'updated_at', 'valid_from', 'valid_until']
    }

    /**
     * relaciona com usuario
     *
     * @memberof Coupon
     */
    users = () => this.belongsTo('App/Models/User');

    /**
     * relaciona com produto
     *
     * @memberof Coupon
     */
    products = () => this.belongsToMany('App/Models/Product');

    /**
     * relaciona com ordem
     *
     * @memberof Coupon
     */
    orders = () => this.belongsToMany('App/Models/Order');
}

module.exports = Coupon
