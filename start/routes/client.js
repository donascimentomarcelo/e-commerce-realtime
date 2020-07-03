'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {

    Route.get('products', 'ProductController.index');
    Route.get('products/:id', 'ProductController.show');

    Route.resource('orders', 'OrderController')
        .apiOnly();
})
    .prefix('v1/client')
    .namespace('Client');