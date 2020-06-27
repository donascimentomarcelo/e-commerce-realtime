'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    /**
     * relacionamento com imagem
     *
     * @memberof Category
     */
    image = () => this.belongsTo('App/Models/Image');

    /**
     * relaciona com produto
     *
     * @memberof Category
     */
    products = () => this.belongsToMany('App/Models/Product'); 
}

module.exports = Category
