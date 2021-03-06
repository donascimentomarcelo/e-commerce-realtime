'use strict'

const OrderItemHook = exports = module.exports = {}
const Product = use('App/Model/Product');
OrderItemHook.method = async (model) => {
    const product = await Product.find(model.product_id);
    model.subtotal = model.quantity * product.price;
}
