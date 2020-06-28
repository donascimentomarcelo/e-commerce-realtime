'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

    static boot() {
        super.boot();

        this.addHook('beforeSave', 'OrderItemHook.updateSubtotal')
    }

    /**
     * relaciona com produto
     *
     * @memberof OrderItem
     */
    product = () => this.belongsTo('App/Models/Product');

    /**
     * relaciona com ordem
     *
     * @memberof OrderItem
     */
    order = () => this.belongsTo('App/Models/Order');

    /**
     * informa que OrderItem nao tem timestamp
     *
     * @readonly
     * @static
     * @memberof OrderItem
     */
    static get traits() {
        return ['App/Models/Traits/NoTimestamp'];
    }
}

module.exports = OrderItem
