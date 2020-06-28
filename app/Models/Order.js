'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    /**
     * relaciona com itens
     *
     * @memberof Order
     */
    items = () => this.hasMany('App/Models/OrderItem');

    /**
     * relaciona com cupom
     *
     * @memberof Order
     */
    coupons = () => this.belongsToMany('App/Models/Coupon');

    /**
     * relaciona com disconto
     *
     * @memberof Order
     */
    discount = () => this.hasMany('App/Models/Discount');

    /**
     * relaciona com usuario
     *
     * @memberof Order
     */
    user = () => this.belongsTo('App/Models/User', 'user_id',' id');
}

module.exports = Order
