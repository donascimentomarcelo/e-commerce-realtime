'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    /**
     * relacionamento com imagem
     *
     * @memberof Category
     */
    image = () => this.belongsTo('App/Models/Image');

    /**
     * relaciona com galeria de imagens
     *
     * @memberof Product
     */
    images = () => this.belongsToMany('App/Models/Image');

    /**
     * relaciona com categoria
     *
     * @memberof Product
     */
    categories = () => this.belongsToMany('App/Models/Category')

    /**
     * relaciona com cupom
     *
     * @memberof Product
     */
    coupons = () => this.belongsToMany('App/Models/Coupon');
}

module.exports = Product
