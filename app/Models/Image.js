'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Image extends Model {

    static get computed() {
        return ['url'];
    }

    /**
     * retorna url onde imagem sera salva
     *
     * @memberof Image
     */
    getUrl = ({ path }) => `${Env.get('APP_URL')}/images/${path}`;

}

module.exports = Image
